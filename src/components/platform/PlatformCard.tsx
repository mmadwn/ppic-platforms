import { Card, Tag } from "antd"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/providers/theme-provider"
import styles from '@/styles/Card.module.css'
import { Platform } from "@/types"

const { Meta } = Card

export function PlatformCard({ title, description, imageSrc, href, status }: Platform) {
  const { theme } = useTheme()

  const getStatusColor = (status: string) => {
    if (theme === 'dark') {
      switch (status) {
        case 'active':
          return '#4ADE80'
        case 'maintenance':
          return '#FBBF24' 
        case 'coming soon':
          return '#60A5FA'
        default:
          return '#94A3B8'
      }
    }
    return status === 'active' ? 'success' : status === 'maintenance' ? 'warning' : 'processing'
  }

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
          backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          borderRadius: '12px',
        }}
      >
        <Meta
          title={
            <h3 className={styles.title}>
              {title}
            </h3>
          }
          description={
            <div className={styles.contentWrapper}>
              <p className={styles.description}>
                {description}
              </p>
              <Tag 
                color={getStatusColor(status)}
                className={styles.tag}
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
