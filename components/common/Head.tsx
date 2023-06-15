import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'

const Head: FC<{ seoInfo: any }> = (props) => {
  return (
    <>
      <DefaultSeo {...props.seoInfo} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <link
          rel="icon"
          type="image/png"
          href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKC0sJCYxJx8pLTUtMS03Oi41Iy8zODUxQDU1MEIBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3NzczNzc3ODU3Nzc3LSs3NS03NzI2Ky01Nis1OC0tNS03LS0rNy01Lf/AABEIACAAIAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAFBwEEBgD/xAAnEAAABgECBQUBAAAAAAAAAAAAAQIDBAURBiESEyIxUQdBYZGhFf/EABoBAAIDAQEAAAAAAAAAAAAAAAADAQQGBQL/xAAjEQACAgIBBAIDAAAAAAAAAAAAAQIDBBExBRIhYVGBEyJB/9oADAMBAAIRAxEAPwBGgAIVlNZWvM/mwZMrl44+S2auHPbOAi7Kpo1+WSW/lnqMHLgsS9MXkKM5Jl1MxlhssqcWyZJIvkwuvqGLZJQhYm37Jdc0ttAcWzwSQAHPBavo3plRr0c0pMt1w1yDZQjKi6iyfFt3IiGNtliz6pas1/ql43v18fZcSkql2GK1TqDWsdpdVqOU+hMhsjUy4hvqTnbci8l5HawcLpkmrsaK8PnyJnOziRjB2BJJAAbNrb2FN6Uabfq5bsZ1bhoUps8Gaevb7IZOjGpyOr3xujta/v0WpScao6FrbW1hcSEyLOU7JeSnhJbh5Mk77fo01GNVjx7ao6XorOTlyDw4g4AF5+0nPwGYD0t5cRk8tMqWZpQe/YvbuFRx6o2OyMV3Plk9za0UQ0g4AH//2Q=="
        />
      </NextHead>
    </>
  )
}

export default Head
