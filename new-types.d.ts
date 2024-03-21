// 참고 src/components/Main/Apps.json
type AppType = {
  name: string;
  width: number;
  height: number;
};

type WindowType = {
  id: number;
  name: string;
  centerPos: { x: number; y: number };
  zIndex: number;
  width: number;
  height: number;
};
