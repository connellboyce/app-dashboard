import AppInfo from "@/app/components/AppInfo";

export default function Home() {
  return (
    <div className="">
      <main className="lg:px-24 py-8">
          <h1 className="text-center">app<span className="text-secondary">dashboard</span></h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-8 items-center w-3/4 lg:w-full mx-auto">
              <AppInfo name={"connellboyce.com"} domain={"https://www.connellboyce.com"} />
              <AppInfo name={"CB Authorization Hub"} domain={"https://auth.connellboyce.com"} />
              <AppInfo name={"Infinite Fusion Team Planner"} domain={"https://infinite-fusion.connellboyce.com"} />
              <AppInfo name={"Minebot - Minecraft Server Discord Bot"} domain={"https://minecraft-server-discord-bot-7tev.onrender.com"} />
              <AppInfo name={"Minecraft Server State API"} domain={"https://juir6bkjkivo7p7mvyc6cvx4xy0tklrw.lambda-url.us-east-1.on.aws/"} />
              <AppInfo name={"App Dashboard"} domain={"https://apps.connellboyce.com"} />
          </div>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
