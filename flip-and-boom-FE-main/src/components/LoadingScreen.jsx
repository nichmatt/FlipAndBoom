export default function LoadingScreen() {
  return (
    <>
      <div className="h-[10rem] w-[23rem] fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 cursor-wait">
        <div className="flex justify-center space-x-3">
          <div className="animate__animated animate__flip animate__delay-2 animate__infinite">
            <img
              src="/assets/card/amethyst.png"
              alt="logo"
              className="w-32 animate__animated animate__bounce animate__slow animate__infinite"
            />
          </div>
          <div className="animate__animated animate__flip animate__infinite">
            <img
              src="/assets/card/cerulean.png"
              alt="logo"
              className="w-32 animate__animated animate__bounce animate__delay animate__infinite "
            />
          </div>
          <div className="animate__animated animate__flip animate__delay-2 animate__infinite">
            <img
              src="/assets/card/citrus.png"
              alt="logo"
              className="w-32 animate__animated animate__bounce animate__slow animate__infinite"
            />
          </div>
          <div className="animate__animated animate__flip animate__infinite">
            <img
              src="/assets/card/prismancer.png"
              alt="logo"
              className="w-32 animate__animated animate__bounce animate__delay animate__infinite"
            />
          </div>
        </div>
      </div>
      <div className="fixed bg-black opacity-[85%] backdrop-blur-[5px] pointer-events-auto z-30 top-0 left-0 right-0 bottom-0 cursor-wait" />
    </>
  );
}
