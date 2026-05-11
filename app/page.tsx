import Hello from "@/components/Hello"

const page = () => {
  console.log(`What type of component am I?`)

  return (
    <main>
      <div>
        Welcome to Next.js
      </div>
      <Hello />
    </main>
  )
}

export default page
