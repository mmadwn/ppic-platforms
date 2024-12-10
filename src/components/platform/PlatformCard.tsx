import { Card, Tag } from "antd"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/providers/themeProvider"
import styles from './Card.module.css'
import { Platform } from "@/types"
import { getStatusColor } from "@/utils/platformUtils"
const { Meta } = Card

export function PlatformCard({ title, description, img_url, index_url, status }: Platform) {
  const { theme } = useTheme()
  const statusColor = getStatusColor(status);

  return (
    <Link href={index_url} className={styles.cardContainer}>
      <Card
        hoverable
        cover={
          <div className={styles.imageContainer}>
            <Image
              src={img_url}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.image}
            />
          </div>
        }
        className={styles.card}
        styles={{
          body: {
            flex: 1,
            height: '100%',
            padding: 0,
            backgroundColor: theme === 'dark' ? '#141F2E' : '#ffffff',
            borderRadius: '12px',
          }
        }}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <span 
              className={styles.tag}
              data-status={status}
            >
              {status}
            </span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </Card>
    </Link>
  )
}
