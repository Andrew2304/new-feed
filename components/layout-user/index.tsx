import { Col, Row } from "antd"
import styles from "./index.module.scss"
import React, { ReactNode, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Router from 'next/router'

type Props = {
  children?: ReactNode
}

const LayoutUser = ({ children }: Props) => {
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      Router.push("/")
    }
  })
  return (
    <Row>
      <Col span={12}>
        <div className={styles?.formSection}>
          <div className={styles?.formWrapper}>{children}</div>
          <Link href="/">
            <a className={styles["link-home"]}>Trang chủ</a>
          </Link>
        </div>
      </Col>
      <Col span={12}>
        <div className={styles.imageSection}>
          <Image src="/imgs/logo.svg" alt="Logo" width={150} height={45} />
        </div>
      </Col>
    </Row>
  )
}

export default LayoutUser
