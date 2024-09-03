import { Key } from "react";
import Carousal from "../../components/Carousal";
import Flyers, { FlyerProps } from "../../components/Flyers";
import useFetch from "../../hooks/useFetch";

const PublicPromotion = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { data, isError, isPending } = useFetch(url);

  if (data == null) {
    return;
  }

  return (
    <div>
      <h6>Is a promotion your goal?</h6>
      <section>
        <p>
          Are you planning your next big event and need help spreading the word?
          <p>We can help promote it effectively on our website!</p>
          🌐 Whether it's a vibrant mela 🎪, a community fair 🏞️, a grand
          concert 🎶, or any other special gathering 🎊, we’ll make sure it gets
          the attention it deserves. For as little as $10, you can showcase your
          event on our platform, where **thousands** of people can see it 👀.
        </p>
        <span>
          Simply submit your details 📝, and let us help you make your event a
          hit!
        </span>
        <p>🎯Check out Samples below</p>
      </section>
      <section>
        {isError && <p>Error: {isError}</p>}
        {isPending && <p>Loading...</p>}

        <Carousal
          content={
            data &&
            data.map((item: FlyerProps, key: Key | null | undefined) => (
              <Flyers
                key={key}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))
          }
          itemCount={5}
        />
      </section>
    </div>
  );
};

export default PublicPromotion;
