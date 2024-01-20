//TODO: dark mode

import { ReactNode } from "react";

const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center flex items-center justify-center h-[100vh] ">
      {children}
    </section>
  );
};

const App = () => {
  return (
    <div className=" w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll">
      <SnapSection>
        <h1 className="text-7xl">Hi</h1>
      </SnapSection>
      <SnapSection>
        <h1 className="text-7xl">Hi</h1>
      </SnapSection>
      <SnapSection>
        <h1 className="text-7xl">Hi</h1>
      </SnapSection>
    </div>
  );
};

export default App;
