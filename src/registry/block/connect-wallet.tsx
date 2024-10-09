import { AboutWallets } from "./about-wallets";
import { SelectAccount } from "./select-account";
import { SelectWallet } from "./select-wallet";

import { Multistep, useMultistep } from "@/components/ui/multistep";

export const ConnectWallet = () => {
  return (
    <Multistep initialView="connectWallet">
      <SelectWalletComponent key="connectWallet" />
      <SelectAccountComponent key="selectAccounts" />
      <AboutWalletsComponent key="aboutWallets" />
    </Multistep>
  );
};

const SelectWalletComponent = () => {
  const { setView } = useMultistep();

  return (
    <Multistep.Step>
      <SelectWallet
        onSelectAccount={() => setView("selectAccounts")}
        onReadMore={() => setView("aboutWallets")}
      />
    </Multistep.Step>
  );
};

const SelectAccountComponent = () => {
  const { setView } = useMultistep();

  return (
    <Multistep.Step>
      <SelectAccount onBack={() => setView("connectWallet")} />
    </Multistep.Step>
  );
};

const AboutWalletsComponent = () => {
  const { setView } = useMultistep();

  return (
    <Multistep.Step>
      <AboutWallets onBack={() => setView("connectWallet")} />
    </Multistep.Step>
  );
};
