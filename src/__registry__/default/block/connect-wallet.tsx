import { AboutWallets } from "@/registry/default/block/about-wallets";
import { SelectAccount } from "@/registry/default/block/select-account";
import { SelectWallet } from "@/registry/default/block/select-wallet";
import { Multistep, useMultistep } from "@/registry/default/ui/multistep";

export const ConnectWallet = () => {
  return (
    <Multistep initialView="connectWallet">
      <SelectWalletComponent />
      <SelectAccountComponent />
      <AboutWalletsComponent />
    </Multistep>
  );
};

const SelectWalletComponent = () => {
  const { setView } = useMultistep();

  return (
    <Multistep.Step name="connectWallet">
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
    <Multistep.Step name="selectAccounts">
      <SelectAccount onBack={() => setView("connectWallet")} />
    </Multistep.Step>
  );
};

const AboutWalletsComponent = () => {
  const { setView } = useMultistep();

  return (
    <Multistep.Step name="aboutWallets">
      <AboutWallets onBack={() => setView("connectWallet")} />
    </Multistep.Step>
  );
};
