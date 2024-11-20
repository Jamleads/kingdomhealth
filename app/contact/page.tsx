"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Facebook, YouTube, Instagram, LinkedIn } from "@mui/icons-material";

export default function ContactUSPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="relative text-white py-24">
          <div className="absolute inset-0">
            <Image
              src="/assets/Hero_background.svg"
              alt="Support Team"
              width={1920}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#20BEB8] to-[#0F172A] opacity-[0.5]"
            aria-hidden="true"
          ></div>
          <Container
            maxWidth="lg"
            className="relative flex flex-col items-center justify-center"
          >
            <Typography variant="h2" className="text-center font-bold mb-4">
              We&apos;re here to help
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-center max-w-2xl mx-auto"
            >
              For general inquiries or support related to Medicare&apos;s
              services, please contact our dedicated customer support team.
            </Typography>
          </Container>
        </div>

        {/* Contact Info Cards */}
        <div className="bg-[#F9FAFB]">
          <Container maxWidth="lg" className="w-full py-16 ">
            <div className="grid md:grid-cols-3 gap-8">
              <Card elevation={0} className="bg-[#FFFFFF] rounded-lg shadow-sm">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="mb-2 text-[#0F172A] font-bold"
                  >
                    Email
                  </Typography>
                  <Typography variant="body1" color="text-[#475569]">
                    support@medicare.com
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={0} className="bg-[#FFFFFF] rounded-lg shadow-sm">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="mb-2 text-[#0F172A] font-bold"
                  >
                    Location
                  </Typography>
                  <Typography variant="body1" color="text-[#475569]">
                    Osler Tower, 25 Apple Avenue
                    <br />
                    New York, NY
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={0} className="bg-[#FFFFFF] rounded-lg shadow-sm">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="mb-2 text-[#0F172A] font-bold"
                  >
                    Phone
                  </Typography>
                  <Typography variant="body1" color="text-[#475569]">
                    +23480789101112, +23480789101112
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Container>

          {/* Social Links */}
          <Container maxWidth="lg" className="pb-20">
            <div className="flex justify-center gap-6">
              <Link href="#" className="text-gray-600 hover:text-teal-600">
                <Facebook fontSize="large" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-600">
                <YouTube fontSize="large" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-600">
                <Instagram fontSize="large" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-600">
                <LinkedIn fontSize="large" />
              </Link>
            </div>
          </Container>
        </div>

        {/* Contact Form */}
        <Container maxWidth="md" className="py-20">
          <Typography variant="h3" className="text-center mb-8 font-bold">
            Get in touch
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              required
              fullWidth
              label="Full name"
              variant="outlined"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                required
                fullWidth
                label="Phone number"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Email address"
                type="email"
                variant="outlined"
              />
            </div>
            <TextField
              required
              fullWidth
              label="Main Message"
              multiline
              rows={4}
              variant="outlined"
            />
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                className="!bg-teal-500 hover:bg-teal-600"
              >
                Submit form
              </Button>
            </div>
          </form>
        </Container>

        {/* Join Our Journey */}
        <div className="bg-[#1CABA5] text-white py-20">
          <Container
            maxWidth="lg"
            className="flex flex-col items-center justify-center gap-5"
          >
            <Typography variant="h3" className="text-center mb-4 font-bold">
              Join Our Journey
            </Typography>
            <Typography
              variant="body1"
              className="text-center max-w-3xl mx-auto mb-8"
            >
              As we continue to grow and evolve, our commitment to improving
              healthcare access remains unchanged. Whether you&apos;re a patient
              seeking better healthcare solutions or a healthcare professional
              looking to expand your practice, we invite you to join us in
              shaping the future of healthcare.
            </Typography>
            <div className="flex justify-center gap-4">
              <Button
                variant="contained"
                className="!bg-[#000000] flex items-center gap-3"
              >
                <Image
                  src="assets/GooglePlaylogo.svg"
                  alt=""
                  width={100}
                  height={37}
                  className="h-[30px] w-auto"
                />
                <span className="flex flex-col items-start">
                  <span className="font-light md:text-xs !text-start !text-[0.50rem]">
                    Get it on
                  </span>
                  <span className="font-bold md:text-lg !text-center">
                    Google Play
                  </span>
                </span>
              </Button>

              <Button
                variant="contained"
                className="!bg-[#000000] flex items-center gap-3"
              >
                <Image
                  src="assets/Applelogo.svg"
                  alt=""
                  width={100}
                  height={37}
                  className="h-[30px] w-auto"
                />
                <span className="flex flex-col !items-start">
                  <span className="font-light md:text-xs !text-start !text-[0.50rem]">
                    Download on the
                  </span>
                  <span className="font-bold md:text-lg !text-center">
                    App Store
                  </span>
                </span>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}