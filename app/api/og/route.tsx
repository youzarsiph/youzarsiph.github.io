import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <img
          alt="Logo"
          height={1080}
          src="https://github.com/user-attachments/assets/429ac96c-8370-4871-9e6a-0fe178de2af0"
          width={1080}
        />
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    },
  )
}
