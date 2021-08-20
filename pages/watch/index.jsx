import PromotionDetail from "./PromotionDetail";
import NextSeoPage from "./NextSeoPage";
import GameSheet from "./GameSheet";
import BacaraDetail from "./BacaraDetail";
import ShootFishDetail from "./ShootFishDetail";
import GameSheetfish from "./GameSheetfish";
import SlotDetail from "./SlotDetail";
import GameSheetspin from "./GameSheetspin";
import Watch from "./Watch";

export default function WatchPage() {
  return (
    <div className="bg-image">
      <NextSeoPage />
      <div className="home">
        <div className="container">
          <div className="hero-area">
            <PromotionDetail />
          </div>
        </div>
        <GameSheet />
        <div className="container">
          <BacaraDetail />
        </div>
        <div className="bg-image shootfish">
          <ShootFishDetail />
          <GameSheetfish />
        </div>
        <div className="bg-image slot">
          <SlotDetail />
          <GameSheetspin />
          <Watch />
        </div>
      </div>
    </div>
  );
}
