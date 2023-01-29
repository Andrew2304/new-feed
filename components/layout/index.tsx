import React, { ReactNode, useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Spin } from "antd"
import { useAuth } from "../../hooks/useAuth"

type Props = {
  children?: ReactNode
  loading?: boolean
  pageName?: string
  isFullPage?: boolean
}

const LayoutUser = ({ children, loading, pageName = "", isFullPage }: Props) => {
  const isFullWidth = isFullPage || ["HomePage"].includes(pageName)

  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [asPath, setAsPath] = useState("/")

  useEffect(() => {
    const onClick = (e: any) => {
      const elm = e.target
      if (elm.matches(".show-login") || elm.closest(".show-login")) {
        const url = elm.getAttribute("data-link")
        setAsPath(url)
        if (useAuth.getUser()) {
          router.push(url || router.asPath)
        } else {
          e.preventDefault()
          setIsModalOpen(true)
        }
      }
    }
    window.addEventListener("click", onClick)

    return () => window.removeEventListener("click", onClick)
  }, [router])

  return (
    <>
      <div className={pageName}>
        <div
          className={isFullWidth ? "" : "container"}
          style={isFullWidth ? {} : { marginTop: "3rem" }}
        >
          {children}
        </div>
        {loading && (
          <div className="wrap-loading">
            <Spin size="large" />
          </div>
        )}
      </div>
    </>
  )
}

export default LayoutUser
