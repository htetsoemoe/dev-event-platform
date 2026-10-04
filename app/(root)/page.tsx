import { Suspense } from "react"
import Hello from "@/components/Hello"

const Albums = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  )

  if (!response.ok) {
    throw new Error("Failed to fetch data.")
  }

  const albums: { id: number; title: string }[] = await response.json()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {albums.map((album) => (
        <div
          key={album.id}
          className="bg-gray-400 shadow-md rounded-lg p-4 mt-2 mb-2"
        >
          <h3 className="text-lg font-bold mb-2">
            {album.title}
          </h3>

          <p className="text-gray-600">
            Album ID: {album.id}
          </p>
        </div>
      ))}
    </div>
  )
}

// <Suspense></Suspense>: Lets you display a fallback until its children have finished loading.
const Page = () => {
  return (
    <div>
      <p className="text-5xl">Welcome to Next.js!</p>

      <Hello />

      <Suspense fallback={<p>Loading albums...</p>}>
        <Albums />
      </Suspense>
    </div>
  )
}

export default Page