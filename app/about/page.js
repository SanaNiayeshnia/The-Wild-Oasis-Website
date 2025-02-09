import Image from "next/image";
import aboutPic1 from "@/public/about-1.jpg";
import aboutPic2 from "@/public/about-2.jpg";
import Link from "next/link";

export const metadata = { title: "About" };
function Page() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="text-justify flex flex-col items-center lg:items-start gap-6 ">
          <h1 className="text-2xl font-semibold text-accent-400">
            Welcome to The Wild Oasis
          </h1>
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
        <Image
          className="object-cover w-full lg:w-md rounded-sm aspect-video lg:aspect-square"
          src={aboutPic1}
          alt="The Wild Oasis"
          placeholder="blur"
        />
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center mt-20">
        <Image
          className="object-cover w-full lg:w-md rounded-sm aspect-video lg:aspect-square"
          src={aboutPic2}
          alt="The Wild Oasis"
          placeholder="blur"
        />

        <div className="text-justify flex flex-col items-center lg:items-start gap-6 ">
          <h1 className="text-2xl font-semibold text-accent-400">
            Managed by our family since 1962
          </h1>
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>
          <Link
            href="/cabins"
            className="bg-accent-500 shadow-lg py-4 px-6 text-primary-950 rounded hover:bg-accent-600 hover:rounded-none hover:px-8 transition-all duration-300"
          >
            Explore luxury cabins
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page;
