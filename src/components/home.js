import Card from "../util/card";
export default function Home() {
  return (
    <>
      <h1>BadBank</h1>
      <h3>Welcome to your React bank</h3>
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
