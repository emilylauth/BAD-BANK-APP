import Card from "../util/card";
export default function Home() {
  return (
    <>
      <h1>Welcome to the bank</h1>
      <Card
        bgcolor="white"
        body={
          <>
            <div
              style={{
                width: "18rem",
              }}
            >
              <img src="./bankicon.png" alt="bank" width="100%" />
            </div>
          </>
        }
      />
    </>
  );
}
