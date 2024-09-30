import { JoinNewsletter } from "@/components";
import {
  Accordion,
  Avatar,
  Badge,
  BasicCard,
  Button,
  H1,
  H2,
  H3,
  H4,
  Input,
  Textarea,
} from "@/packages/ui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-36">
      <section className="container max-w-6xl mx-auto mt-36 text-center text-gray-900">
        <H1>Make your projects</H1>
        <H1 className="text-outlined">stand out!</H1>

        <p className="text-lg text-gray-600 mb-8 mt-4 max-w-2xl mx-auto">
          Retro styled component library for modern web apps. Comes with 20+
          free UI components that you can just copy paste into your projects.{" "}
          {/* <br /> Now available for both HTML and React! */}
        </p>

        <div className="max-w-96 grid gap-4 mx-auto grid-cols-2">
          <Link href="/docs" passHref>
            <Button className="w-full" aria-label="Get Started with RetroUI">
              Get Started
            </Button>
          </Link>
          <Link
            href="https://github.com/ariflogs/retroui"
            target="_blank"
            passHref
          >
            <Button
              className="w-full"
              variant="outline"
              aria-label="Get Started with RetroUI"
            >
              Github
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl mx-auto ">
        <div className="grid gird-cols-1 lg:grid-cols-2 items-center">
          <div>
            <H3>Why Use RetroUI?</H3>
            <H1 className="mt-4">Coz We C000l!!</H1>
          </div>

          <img
            alt="orange cool cat"
            src="/images/orange_boos.png"
            className="h-full w-full"
          />
        </div>
      </section>

      {/* Component Previews Section */}
      <section className="container max-w-6xl mx-auto ">
        <H2 className="mb-16">
          Our components look both old school and modern! ✨
        </H2>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="space-y-4">
            <H4>Button</H4>
            <Button>Click Me</Button>
          </div>
          <div className="space-y-4">
            <H4>Badge</H4>
            <div className="space-x-2">
              <Badge>Default Badge</Badge>
              <Badge variant="error">Error Badge</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <H4>Avatar</H4>
            <Avatar />
          </div>
          <div className="space-y-4">
            <H4>Input</H4>
            <Input />
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="space-y-4">
            <H4>Textarea</H4>
            <Textarea />
          </div>
          <div className="space-y-4">
            <H4>Basic Card</H4>
            <BasicCard />
          </div>
          <div className="space-y-4">
            <H4>Accordion</H4>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto">
        <H2 className="mb-16">
          And NO! We didn&apos;t just copy Gumroad!
          <br />
          Inspired, if you will... 💅
        </H2>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <Image
            src="/images/our_product_card.png"
            alt="our product card"
            width={300}
            height={500}
          />
          <H3 className="lg:hidden mt-2 mb-12">👆 RetroUI Card</H3>

          <div className="hidden lg:block space-y-4">
            <H2 className="text-left">👈 RetroUI Card</H2>
            <H2 className="text-right">Gumroad&apos;s Card 👉</H2>
          </div>
          <Image
            src="/images/gumroad_product_card.png"
            alt="our product card"
            className="ml-auto"
            width={300}
            height={600}
          />
          <H3 className="lg:hidden mt-2">👆 Gumroad&apos;s Card</H3>
        </div>
      </section>

      <JoinNewsletter />
      <footer className="bg-black py-8">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/ariflogs" className="text-primary-500">
              Twitter
            </a>
            <a
              href="https://github.com/ariflogs/retroui"
              className="text-primary-500"
            >
              GitHub
            </a>
            <a href="/docs" className="text-primary-500">
              Documentation
            </a>
          </div>

          <p className="text-gray-300 text-sm">
            Built by{" "}
            <a href="https://twitter.com/ariflogs" className="text-primary-500">
              Arif Hossain
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
