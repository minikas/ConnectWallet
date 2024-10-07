import { SelectWallet } from "@/components/connectWallet/selectWallet";
import { AboutWallets } from "@/components/connectWallet/aboutWallets";
import { SelectAccount } from "@/components/connectWallet/selectAccount";
import { Multistep } from "@/components/ui/multistep";

export const ConnectWallet = () => {
  return (
    <Multistep initialView="connectWallet">
      <Multistep.Step name="connectWallet">
        <SelectWallet />
      </Multistep.Step>
      <Multistep.Step name="selectAccounts">
        <SelectAccount />
      </Multistep.Step>
      <Multistep.Step name="aboutWallets">
        <AboutWallets />
      </Multistep.Step>
    </Multistep>
  );
};
