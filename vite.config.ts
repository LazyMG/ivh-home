import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // vendor 청크 분리: 앱 코드가 바뀌어도 아래 라이브러리 청크는 캐시가 유지되도록
        // 자주 바뀌지 않는 대형 의존성을 별도 청크로 고정한다.
        manualChunks: {
          // React 런타임 (거의 변경 없음) — 모든 페이지가 사용하므로 초기 로드 필수
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // MUI + Emotion — 번들에서 가장 큰 비중. 별도 청크로 분리해 캐시 효율 확보
          "mui-vendor": ["@mui/material", "@emotion/react", "@emotion/styled"],
          // i18n — 초기 언어 초기화에 필요
          "i18n-vendor": ["i18next", "react-i18next"],
        },
      },
    },
  },
})
