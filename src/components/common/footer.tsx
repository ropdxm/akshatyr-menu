import { Text } from "@medusajs/ui";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 bg-ui-fg-base text-ui-fg-on-inverted">
      <Text className="flex gap-1 text-sm text-ui-fg">
        © {new Date().getFullYear()}
        <Link
          href="https://medusajs.com/"
          className="flex gap-1 items-center hover:text-ui-bg-base-hover"
        >
          Akshatyr
        </Link>
        |
        <Link
          href="https://www.instagram.com/akshatyr_zonaotdyha/"
          className="flex gap-1 items-center hover:text-ui-bg-base-hover"
        >
          Zona Otdyha
        </Link>
      </Text>
    </footer>
  );
}
