import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";
import CV from "../components/cv";

export default function Home() {
  const [show, setShow] = useState(false);
  const parent = useRef(null);
  const dragon = useRef();
  const alia = useRef();
  const land = useRef();
  const menu = useRef();

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div className="bg-gray-800 text-white">
      <div className="p-14">
        <p className="text-3xl text-center font-bold m-4">Project Portfolio</p>
        <p className="text-xl text-center">Paolo Lago Palomeque</p>
      </div>
      <div className="p-14">
        <div
          className="rounded-xl p-4 mx-8 bg-gray-700  hover:cursor-pointer"
          onClick={reveal}
          ref={parent}
        >
          <div className="flex justify-between">
            <p>CV</p>
            {show ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </div>
          {show && <CV />}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center p-14" ref={menu}>
        <div
          className="m-4 p-5 rounded-3xl max-w-xs bg-gray-700 text-center hover:cursor-pointer hover:outline hover:outline-2 hover:outline-gray-200 active:outline active:outline-2 active:outline-gray-600"
          onClick={(_) => dragon.current.scrollIntoView({ behavior: "smooth" })}
        >
          <p className="text-2xl font-medium m-4">Dragon Bounty</p>
          <p>
            A multiplayer snake game to hunt down and take the bounty from other
            players.
          </p>
        </div>
        <div
          className="m-4  p-5 rounded-3xl max-w-xs bg-gray-700 text-center hover:cursor-pointer hover:outline hover:outline-2 hover:outline-gray-200 active:outline active:outline-2 active:outline-gray-600"
          onClick={(_) => alia.current.scrollIntoView({ behavior: "smooth" })}
        >
          <p className="text-2xl font-medium m-4">Alia Tokens</p>
          <p>
            Create your own ERC20 token and leverage the power of crypto with
            ease. AMMs, dividends, etc...
          </p>
        </div>
        <div
          className="m-4  p-5 rounded-3xl max-w-xs bg-gray-700 text-center hover:cursor-pointer hover:outline hover:outline-2 hover:outline-gray-200 active:outline active:outline-2 active:outline-gray-600"
          onClick={(_) => land.current.scrollIntoView({ behavior: "smooth" })}
        >
          <p className="text-2xl font-medium m-4">Land Token DAO</p>
          <p>
            Purchase and sell land through NFTs, while the underlying asset is
            legally guarded by a trust.
          </p>
        </div>
      </div>
      <div className="bg-gray-700 p-14" ref={dragon}>
        <div>
          <p className="text-2xl font-medium">Dragon Bounty</p>
          <div className="flex items-center">
            <button
              onClick={(_) =>
                window.open("https://snakejs-web.vercel.app/", "_blank")
              }
              className="rounded bg-black text-white p-2 my-4 hover:outline hover:outline-2 hover:outline-violet-200 active:outline active:outline-2 active:outline-violet-600"
            >
              Go to app
            </button>
            <p
              className="ml-6 hover:cursor-pointer active:text-gray-200"
              onClick={(_) =>
                menu.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              back to top
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="relative w-full h-128 xl:w-3/5">
            <Image
              src="/dragonbounty-architecture.svg"
              layout="fill"
              // height={1400}
            />
          </div>
          <div className="w-full xl:w-2/5 p-4">
            <p className="font-bold my-4">Description</p>
            <p className="my-2">
              Multiplayer game where you control a simple snake and bet an
              amount of credits, which is your initial carry. If another player
              crashes into you, you absorve his credits up to the amount you
              currently carry. You loose when your whole carry is absorved, and
              win by crashing into yourself as the last snake standing.
            </p>
            <p className="font-bold my-4">Tech Showcase</p>
            <ul className="my-2 list-disc">
              <li>NodeJS backend with Express API.</li>
              <li>
                Socket IO for communication and realtime sync of state among
                players.
              </li>
              <li>Nextjs frontend.</li>
              <li>
                Authentication using metamask, regardless of blockchain network
                in this demo state.
              </li>
            </ul>
            <p className="font-bold my-4">Instructions</p>
            <p className="my-2">You must have metamask installed.</p>
            <p className="my-2">
              To see the game in action and play against yourself, access the
              app in two different browsers or browser sessions. This has to be
              done for different accounts of metamask to access the game at the
              same time.
            </p>
            <p className="my-2">
              One account creates the room and the other one simply selects the
              room which will automatically appear in the list of available
              rooms.
            </p>
            <p className="my-2">Expect laggy behavior.</p>
          </div>
        </div>
      </div>
      <div className="p-14" ref={alia}>
        <div>
          <p className="text-2xl font-medium">Alia Tokens</p>
          <div className="flex items-center">
            <button
              onClick={(_) => window.open("http://aliatokens.com/", "_blank")}
              className="rounded bg-black text-white p-2 my-4 hover:outline hover:outline-2 hover:outline-violet-200 active:outline active:outline-2 active:outline-violet-600"
            >
              Go to app
            </button>
            <p
              className="ml-6 hover:cursor-pointer active:text-gray-200"
              onClick={(_) =>
                menu.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              back to top
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="relative w-full h-128 xl:w-3/5 xl:order-last">
            <Image
              src="/aliatokens-architecture.svg"
              layout="fill"
              // height={1400}
            />
          </div>
          <div className="w-full xl:w-2/5 p-4">
            <p className="font-bold my-4">Description</p>
            <p className="my-2">
              App to create and list an ERC20 token to represent a share/stake
              in a project of your own.
            </p>
            <p className="my-2">
              You can hand out tokens to any address, create a token sale,
              distribute dividends to token holders and create an automated
              market maker.
            </p>
            <p className="my-2">
              You can also publish your token in the Alia Tokens website.
            </p>
            <p className="font-bold my-4">Tech Showcase</p>
            <ul className="my-2 list-disc">
              <li>NodeJS backend with Express API.</li>
              <li>Nextjs frontend.</li>
              <li>Authentication using metamask.</li>
              <li>
                Solidity app made with the Hardhat framework and open zeppelin
                libraries with three smart contracts deployed. One is the token
                factory, which calls, creates and keeps track of the token
                contracts and finally a third contract for the automated market
                maker if the token owner decides to create one for his token in
                the alia tokens webpage.
              </li>
            </ul>
            <p className="font-bold my-4">Instructions</p>
            <p className="my-2">You must have metamask installed.</p>
            <p className="my-2">
              The web page has buttons that will connect your metamask wallet to
              the appropriate blockchain testnet (polygon or avalanche).
            </p>
            <p className="my-2">
              Once in the webpage create a new token or select one from the
              published ones.
            </p>
            <p className="my-2">
              If you create one and access the token page, you will be able to
              mint tokens, or create a token sale. You will also be able to give
              dividends to token holders.
            </p>
            <p className="my-2">
              All purchases, dividends and AMM will be made against a FUSDC
              (fake USDC) that you can get by pressing the appropriate button in
              the navbar.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 p-14" ref={land}>
        <div>
          <p className="text-2xl font-medium">Land Token DAO</p>
          <div className="flex items-center">
            <button
              onClick={(_) =>
                window.open("https://landtoken-web.vercel.app/", "_blank")
              }
              className="rounded bg-black text-white p-2 my-4 hover:outline hover:outline-2 hover:outline-violet-200 active:outline active:outline-2 active:outline-violet-600"
            >
              Go to app
            </button>
            <p
              className="ml-6 hover:cursor-pointer active:text-gray-200"
              onClick={(_) =>
                menu.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              back to top
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="relative w-full h-128 xl:w-3/5">
            <Image
              src="/landtoken-architecture.svg"
              layout="fill"
              // height={1400}
            />
          </div>
          <div className="w-full xl:w-2/5 p-4">
            <p className="font-bold my-4">Description</p>
            <p className="my-2">
              Marketplace to buy and sell NFTs that represent ownership of land.
              Because of the planned legal framework for this business, only the
              manager account can create new NFTs as the info included in the
              NFT allows you to legally identify the plot of land.
            </p>
            <p className="font-bold my-4">Tech Showcase</p>
            <ul className="my-2 list-disc">
              <li>NodeJS backend with Express API.</li>
              <li>Nextjs frontend.</li>
              <li>SVG manipulation.</li>
              <li>Authentication using metamask.</li>
              <li>
                Solidity app made with the Hardhat framework and open zeppelin
                libraries with two smart contracts deployed. One for the
                marketplace, anotherone for the land. The program is designed to
                be able to have multiple smart contracts for the NFT
                collections.
              </li>
              <li>
                Google map api/sdk access and manipulation in the front end.
              </li>
            </ul>
            <p className="font-bold my-4">Instructions</p>
            <p className="my-2">You must have metamask installed.</p>
            <p className="my-2">
              The contract is deployed on the avalanche fuji testnet. Add this
              network to your metamask wallet to use the app.
            </p>
            <p className="my-2">
              Once in the app, select the highlighted seccions of the map until
              you enter the google map view with the list of plots of land
              available for purchase.
            </p>
            <p className="my-2">
              In the nav bar there will be a button to get 1M Dummy Tokens which
              are used to purchase the land. Once you purchase the land, you can
              see your land plots in the profile page and put them back on sale
              for the amount of your choosing.
            </p>
            <p className="my-2">
              The UX is unpolished, and there are no indications of the state of
              the blockchain transaction when you call it. Reload the page after
              a while to see the changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
