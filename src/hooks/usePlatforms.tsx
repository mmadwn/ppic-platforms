import { useQuery } from "@tanstack/react-query"
import { Platform } from "@/types"

async function fetchPlatforms(): Promise<Platform[]> {
  return [
    {
      id: "1",
      title: "PPIC Apps",
      description: "Production Planning and Inventory Control applications suite",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
      href: "/ppic",
      status: 'active',
    },
    {
      id: "2",
      title: "Single Sign On",
      description: "Centralized authentication for all PI-GROUP applications",
      imageSrc: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=60",
      href: "/sso",
      status: 'active',
    },
    {
      id: "3",
      title: "Advance Shipment",
      description: "Streamline your shipping process with advanced logistics tools",
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
      href: "/shipment",
      status: 'maintenance',
    },
    {
      id: "4",
      title: "Warehouse Raw Material",
      description: "Efficient management of raw materials in warehouses",
      imageSrc: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=60",
      href: "/warehouse",
      status: 'coming soon',
    },
  ]
}

export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  })
}

