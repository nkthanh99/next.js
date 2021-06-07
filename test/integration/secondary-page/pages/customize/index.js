import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()

  return (
    <div>
      <h1>Customize index</h1>
      <ul>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault()
              router.push('/customize/about', { shallow: true })
            }}
          >
            Go to about
          </a>
        </li>
      </ul>
    </div>
  )
}
