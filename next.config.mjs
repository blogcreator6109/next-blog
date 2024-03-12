import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
    prependData: `
    @import "@/scss/global/variables.scss";
    @import "@/scss/global/mixins.scss";`,
    // prependData 옵션 추가
  },
};

export default nextConfig;
