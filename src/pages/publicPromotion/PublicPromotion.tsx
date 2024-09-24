import Carousal from "../../components/Carousal";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";

const style = {
  border: ".2rem solid",
  width: '350px'
};

const PublicPromotion = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { data, isError, isPending } = useFetch(url);

  if (data == null) {
    return;
  }
  
const lessData = data.slice(0,20)

  return (
    <div>
      <h6>Is a promotion your goal?</h6>
      <section>
        <div>
          <p>
            <b>
              Are you planning your next big event and need help spreading the
              word?
            </b>
          </p>
        </div>
        <p>We can help promote it effectively on our website!</p>
        <div>
          🌐 Whether it's a vibrant mela 🎪, a community fair 🏞️, a grand
          concert 🎶, or any other special gathering 🎊, we’ll make sure it gets
          the attention it deserves.
        </div>
        <div>
          <p>
            For as little as $5, you can showcase your event on our platform,
            where many people can reach.
          </p>
        </div>
        <p>
          Simply submit your details 📝, and let us help you make your event a
          hit!
        </p>
        <p>🎯Check out Samples below</p>
      </section>

      <section>
        {isError && <p>Error: {isError}</p>}
        {isPending && <p>Loading...</p>}
        <Carousal
          reactChildren={lessData
            .map(
              (
                childNode: { url: string | undefined; title: string },
                idx: any
              ) => (
                <Card
                  imageUrl={childNode.url}
                  title={childNode.title}
                  description={childNode.title}
                  key={idx}
                  indiCardStyle={style}
                />
              )
            )}
          autoPlay={true}
          interval={3000}
          itemCount={lessData.length - 1}
        ></Carousal>
      </section>
    </div>
  );
};

export default PublicPromotion;


