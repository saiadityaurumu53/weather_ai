'use client'

import CityPicker from "@/Components/CityPicker";
import { Card, Divider, Subtitle,  Text } from "@tremor/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#18337B] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx auto">
        <Text className="text-6xl font-bold text-center mb-10"> Weather AI</Text>

        <Subtitle className="text-xl text-center">
          Powered By OpenAI, Next.js 14.1, Tailwind CSS, Tremor 2.0 + More!!!
        </Subtitle>

        <Divider className="my-10"></Divider>

        <Card className="bg-gradient-to-br from-[#394F68] to-[#18337B]">
          <CityPicker/>

        </Card>
        
      </Card>
      
    </div>
  );
}
