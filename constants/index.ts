import { ProfileData } from "@/interfaces";
import { IconType } from "react-icons";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaDiscord,
  FaSpotify,
  FaTwitch,
  FaSnapchat,
  FaTelegram,
} from "react-icons/fa";

// Icon mapping for link icons
export const ICON_MAP: Record<string, IconType> = {
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  whatsapp: FaWhatsapp,
  mail: FaEnvelope,
  globe: FaGlobe,
  youtube: FaYoutube,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  discord: FaDiscord,
  spotify: FaSpotify,
  twitch: FaTwitch,
  snapchat: FaSnapchat,
  telegram: FaTelegram,
};

// Profile Data - Edit this to customize your page
export const PROFILE_DATA: ProfileData = {
  name: "Hilton & Elhekma",
  bio: "Your trusted partner in beauty & wellness. Expert medical aesthetics, dermatology, and cosmetic treatments. Enhancing your natural beauty with care and excellence. ✨💙",
  avatar:
    "https://j8v6vnsfxb.ufs.sh/f/KWERu0J43fSURLjMXPQaYOMP6IEhkl1Qr0mtzUFLcAWKBDey",

  // Main links that appear as buttons
  links: [
    {
      id: "1",
      title: "WhatsApp",
      url: "https://wa.me/201070731074",
      icon: "whatsapp",
    },
    {
      id: "2",
      title: "Instagram",
      url: "https://instagram.com/hilton_elhekma",
      icon: "instagram",
    },
    {
      id: "3",
      title: "Facebook Page",
      url: "https://facebook.com/yahay789",
      icon: "facebook",
    },
    {
      id: "4",
      title: "TikTok",
      url: "https://www.tiktok.com/@hilton_elhekma",
      icon: "tiktok",
    },
    {
      id: "5",
      title: "Owner TikTok",
      url: "https://www.tiktok.com/@yehya..1",
      icon: "tiktok",
    },
    {
      id: "6",
      title: "Our Telegram Channel",
      url: "https://t.me/hiltonelhikma",
      icon: "telegram",
    },
    {
      id: "7",
      title: "Owner Link",
      url: "https://yehialinks.vercel.app/",
      icon: "globe",
    },
  ],

  // Social media links that appear as icons
  socialLinks: [
    {
      platform: "whatsapp",
      url: "https://wa.me/201070731074",
      icon: FaWhatsapp,
    },
    {
      platform: "instagram",
      url: "https://instagram.com/hilton_elhekma",
      icon: FaInstagram,
    },
    {
      platform: "facebook",
      url: "https://facebook.com/yahay789",
      icon: FaFacebook,
    },
    {
      platform: "tiktok",
      url: "https://www.tiktok.com/@hilton_elhekma",
      icon: FaTiktok,
    },
    {
      platform: "telegram",
      url: "https://t.me/hiltonelhikma",
      icon: FaTelegram,
    },
  ],
};

export const THEME = {
  // Background gradient - soft blue to cyan (medical/beauty theme)
  background: "from-blue-50 via-cyan-50 to-blue-100",

  // Button background - white with high opacity
  buttonBg: "bg-white",

  // Button hover - blue gradient with glow effect
  buttonHover:
    "hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-blue-500 hover:text-white hover:shadow-2xl hover:shadow-blue-500/30",

  // Primary text - blue for professional medical look
  textPrimary: "text-gray-700",

  // Secondary text - slightly muted
  textSecondary: "text-gray-600",

  // Accent color - medical blue/cyan
  accent: "text-blue-600",

  // Additional styling
  buttonText: "text-gray-700",
  buttonBorder: "border-2 border-blue-100",
  avatarRing: "ring-4 ring-white shadow-2xl",
  socialIcon: "text-blue-600",
  socialIconHover: "hover:text-cyan-500 hover:scale-125",
};
