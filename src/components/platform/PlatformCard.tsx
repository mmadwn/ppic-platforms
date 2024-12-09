import { Card, Tag } from "antd"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/providers/themeProvider"
import styles from './Card.module.css'
import { Platform } from "@/types"
import { getStatusColor } from "@/utils/platform-utils"
const { Meta } = Card

export function PlatformCard({ title, description, imageSrc, href, status }: Platform) {
  const { theme } = useTheme()
  const statusColor = getStatusColor(status, theme);

  return (
    <Link href={href} className={styles.cardContainer}>
      <Card
        hoverable
        cover={
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.image}
            />
          </div>
        }
        className={styles.card}
        style={{
          backgroundColor: theme === 'dark' ? '#141F2E' : '#ffffff',
          backdropFilter: 'blur(12px)',
          borderRadius: '12px',
          border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}
      >
        <Meta
          title={<h3 className={styles.title}>{title}</h3>}
          description={
            <div className={styles.contentWrapper}>
              <p className={styles.description}>{description}</p>
              <Tag 
                color={statusColor}
                className={styles.tag}
                style={{
                  boxShadow: `0 0 12px ${statusColor}25`,
                }}
              >
                {status}
              </Tag>
            </div>
          }
        />
      </Card>
    </Link>
  )
}
