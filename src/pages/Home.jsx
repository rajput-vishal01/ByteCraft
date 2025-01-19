import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import HeroSection from "../components/HeroSection";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Posts Section */}
      <div className="w-full py-20 bg-[#777777] dark:bg-[#777777]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1C1C] dark:text-[#FAFAFF] mb-4">
              Latest Posts
            </h2>
            <p className="text-xl text-[#DADDD8] dark:text-[#ECEBE4]">
              Discover stories from our community.
            </p>
          </div>
          {posts.length === 0 ? (
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-[#FAFAFF] mb-4">
                No posts available
              </h3>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-8">
              {posts.map((post) => (
                <div
                  key={post.$id}
                  className="p-6 rounded-xl bg-[#ffffff] dark:bg-[#505040] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* Featured Categories Section */}
      <div className="w-full py-16 bg-[#ffffff] dark:bg-[#ffffff]">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#000000] dark:text-[#000000] text-center mb-8">
            Explore Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#DADDD8] rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
              <p className="text-[#1C1C1C]">
                Stay updated with the latest trends in technology.
              </p>
            </div>
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#DADDD8] rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-[#1C1C1C]">
                Dive into the world of modern and creative design.
              </p>
            </div>
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#DADDD8] rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Travel</h3>
              <p className="text-[#1C1C1C]">
                Explore travel stories and guides from around the world.
              </p>
            </div>
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#DADDD8] rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Lifestyle</h3>
              <p className="text-[#1C1C1C]">
                Discover tips and stories about everyday life.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-16 bg-[#DADDD8] dark:bg-[#777777]">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1C1C] dark:text-[#FAFAFF] text-center mb-8">
            Why ByteCraft Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#FAFAFF] rounded-lg shadow-lg">
              <p className="text-lg text-[#1C1C1C]">
                "Crafted with a focus on clean design and seamless user
                experience."
              </p>
              <h4 className="mt-4 font-semibold text-[#1C1C1C]">
                - Sleek Interface
              </h4>
            </div>
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#FAFAFF] rounded-lg shadow-lg">
              <p className="text-lg text-[#1C1C1C]">
                "Showcases real-world blog functionality with robust features."
              </p>
              <h4 className="mt-4 font-semibold text-[#1C1C1C]">
                - Practical Implementation
              </h4>
            </div>
            <div className="p-6 bg-[#EEF0F2] dark:bg-[#FAFAFF] rounded-lg shadow-lg">
              <p className="text-lg text-[#1C1C1C]">
                "Developed to highlight responsive design and dynamic
                components."
              </p>
              <h4 className="mt-4 font-semibold text-[#1C1C1C]">
                - Modern Tech Stack
              </h4>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
