"use client";

import { TNewApplication } from "@/app/types";
import { createPool } from "@/sdk/allo";
import { createApplication } from "@/sdk/microgrants";
import { createProfile } from "@/sdk/registry";
import { allocate } from "@/sdk/microgrants";
import { chainData, wagmiConfigData } from "@/services/wagmi";
import { Allocation } from "@allo-team/allo-v2-sdk/dist/strategies/MicroGrantsStrategy/types";
import { Status } from "@allo-team/allo-v2-sdk/dist/strategies/types";
import {
  ConnectButton,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import { WagmiConfig } from "wagmi";

const Home = () => {
  // Set this here so we dont have to create a new profile every time and we are not managing state in this demo.
  // We use the profileId to create a new application in `_newApplicationData`.
  const profileId ="0x045403911906236118b65632e959cfa3c491e25303e8d95a71ebcc759cea3e4d";
  const _newApplicationData: TNewApplication = {
    name: "Project3",
    website: "https:www.google.com",
    description: "Project2",
    email: "test@gitcoin.co",
    // 🚨 This amount cannot be greater than the maxRequestedAmount of the pool or the tx will fail..
    requestedAmount: BigInt(1e18),
    recipientAddress: "0xbFDd2Cce5856Ea15646B23d08Ace466e76AFd96E",
    base64Image: "",
    profileName: "",
    profileId: profileId,
  };

  const _allocationData: Allocation = {
    recipientId: "0x29Ce6b27C4d6Cd27EBb13836DD60a45f84416f94",
    status: Status.Accepted,
  };

  return (
    <WagmiConfig config={wagmiConfigData}>
      <RainbowKitProvider
        chains={chainData}
        modalSize="wide"
        theme={midnightTheme()}
      >
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Fund School Projects using Allo Protocol and MicroStrategies;
              <code className="font-mono font-bold">http://www.rezyfoundation.org</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <ConnectButton />
            </div>
          </div>

          <div className="relative flex place-items-center text-5xl before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            Rezy-Fund
          </div>
          <div className="-mt-40">
            A proposal for funding school projects using recycled plastic bottles using a token (PET), and allocating funds using Allo.
          </div>

          <div>
            <div className="flex flex-row">
              <button
                onClick={() =>
                  createProfile().then((res: any) => {
                    console.log("Profile ID: ", res);
                    alert("Profile created with ID: " + res);
                  })
                }
                className="bg-gradient-to-r from-[#8bc34a] to-[#8bc34a] text-white rounded-lg mx-2 px-4 py-2"
              >
                Create Profile
              </button>
              <button
                onClick={() => {
                  createPool().then((res: any) => {
                    console.log("Pool ID: ", res.poolId);
                    alert("Pool created with ID: " + res.poolId);
                  });
                }}
                className="bg-gradient-to-r from-[#8bc34a] to-[#8bc34a] text-white rounded-lg mx-2 px-4 py-2"
              >
                Create Pool
              </button>
              <button
                onClick={() => {
                  createApplication(_newApplicationData, 421614,3).then(
                    (res: any) => {
                      console.log("Recipient ID: ", res.recipientId);
                      alert("Applied with ID: " + res.recipientId);
                    }
                  );
                }}
                className="bg-gradient-to-r from-[#8bc34a] to-[#8bc34a] text-white rounded-lg mx-2 px-4 py-2"
              >
                Apply to Pool
              </button>
              {/* WIP */}
              {/* <button
                onClick={() => {
                  allocate(_allocationData).then((res: any) => {
                    console.log("Recipient ID: ", res.recipientId);
                    alert("Applied with ID: " + res.recipientId);
                  });
                }}
                className="bg-gradient-to-r from-[#ff00a0] to-[#d75fab] text-white rounded-lg mx-2 px-4 py-2"
              >
                Allocate to Pool
              </button> */}
            </div>
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3">

          
          <button
                onClick={() => {
                  allocate(_allocationData).then((res: any) => {
                    console.log("Recipient ID: ", res.recipientId);
                    alert("Allocated with ID: " + res.recipientId);
                  }).catch((error: any) => {
                    console.error("Error allocating:", error);
                    alert("Allocation failed. Check the console for details.");
                  });
                }}
                className="bg-gradient-to-r from-[#ff00a0] to-[#d75fab] text-white rounded-lg mx-2 px-4 py-2"
              >
                Allocate to Pool
              </button>
            
           

            

            <Link
              href="https://github.com/allo-protocol/allo-v2"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Allo Github{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore starter templates for Next.js.
              </p>
            </Link>
          </div>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Home;
