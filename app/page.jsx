import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI powered prompts</span>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nobis
        aliquam cum eius corporis iusto, sequi ex minus ipsa. Dolorum, nulla sed
        quo molestiae quod quas libero ullam explicabo veniam.
      </p>
      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
