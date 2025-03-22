"use client"

import { useState, useEffect } from "react"
import { Button } from "@mui/material"
// import { Video, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function WaitingRoom() {
  const [waitTime, setWaitTime] = useState<number>(5) // Wait time in minutes
  const [elapsedTime, setElapsedTime] = useState<number>(0) // Elapsed time in seconds
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev < waitTime * 60) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [waitTime])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const remainingTime = Math.max(0, waitTime * 60 - elapsedTime)

  const handleLeaveSession = () => {
    setIsModalOpen(true)
  }

  const confirmLeaveSession = () => {
    // In a real app, this would navigate back to home or another page
    window.location.href = "/"
  }

  const cancelLeaveSession = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - You mentioned you've handled this, so I'm just including a minimal version */}
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="MediCare Logo"
              width={40}
              height={40}
              className="text-[#30c7b5]"
            />
            <span className="ml-2 text-2xl font-medium">MediCare</span>
          </div>
          <div className="flex gap-6">
            <span className="text-gray-600">About us</span>
            <span className="text-gray-600">Contact</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-center mb-10">Waiting Room</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video placeholder area */}
          <div className="lg:w-2/3">
            <div className="bg-[#e6f7f5] rounded-lg h-[400px] md:h-[500px] flex items-center justify-center">
              {/* <Video size={64} className="text-[#30c7b5]" /> */}
            </div>
          </div>

          {/* Doctor info and controls */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-medium mb-2">Dr Alex Zander</h2>
              <p className="text-gray-600 mb-6">Will be with you shortly</p>

              {remainingTime > 0 && (
                <div className="mb-6">
                  <p className="text-gray-600">Estimated wait time:</p>
                  <p className="text-xl font-medium">{formatTime(remainingTime)}</p>
                </div>
              )}

              <div className="space-y-4">
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLeaveSession}
                  className="normal-case"
                  sx={{
                    backgroundColor: "#f44336",
                    "&:hover": {
                      backgroundColor: "#d32f2f",
                    },
                    borderRadius: "6px",
                    textTransform: "none",
                    padding: "12px",
                  }}
                >
                  Leave Session
                </Button>

                {/* //   <BiMessageSquare size={18} />
                // } */}
                <Button
                  variant="outlined"
                  fullWidth
                  className="normal-case"
                  startIcon={''}
                
                  sx={{
                    borderColor: "#e2e8f0",
                    color: "#4b5563",
                    "&:hover": {
                      borderColor: "#d1d5db",
                      backgroundColor: "#f9fafb",
                    },
                    borderRadius: "6px",
                    textTransform: "none",
                    padding: "12px",
                  }}
                >
                  Chat with Support
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg mt-6">
              <h3 className="text-lg font-medium mb-4">Consultation Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure your camera and microphone are working</li>
                <li>• Find a quiet place with good lighting</li>
                <li>• Have your medical history ready</li>
                <li>• Prepare questions you want to ask</li>
                <li>• Keep a pen and paper handy for notes</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Leave Session Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-medium mb-4">Leave Consultation?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to leave this consultation? Your doctor will be joining shortly.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outlined"
                onClick={cancelLeaveSession}
                className="flex-1 normal-case"
                sx={{
                  borderColor: "#e2e8f0",
                  color: "#4b5563",
                  "&:hover": {
                    borderColor: "#d1d5db",
                    backgroundColor: "#f9fafb",
                  },
                  borderRadius: "6px",
                  textTransform: "none",
                  padding: "8px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={confirmLeaveSession}
                className="flex-1 normal-case"
                sx={{
                  backgroundColor: "#f44336",
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                  borderRadius: "6px",
                  textTransform: "none",
                  padding: "8px",
                }}
              >
                Leave
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

