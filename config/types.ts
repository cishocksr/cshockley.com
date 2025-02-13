import type { ComponentType } from 'react'


export interface SiteConfig {
    title: string
    author: string
    headerTitle: string
    description: string
    language: string
    theme: "system" | "dark" | "light"
    siteUrl: string
    siteRepo: string
    siteLogo: string
    image: string
    socialBanner?: string
    email: string
    github: string
    twitter: string
    linkedin: string
    locale: string
}


export interface DarkModeSwitchProps {
    variant?: "icon" | "button"
}


