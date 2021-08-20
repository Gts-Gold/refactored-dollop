import PromotionDetail from "./PromotionDetail";
import NextSeoPage from "./NextSeoPage";
import GameSheet from "./GameSheet";
import BacaraDetail from "./BacaraDetail";
import ShootFishDetail from "./ShootFishDetail";
import GameSheetfish from "./GameSheetfish";
import SlotDetail from "./SlotDetail";
import GameSheetspin from "./GameSheetspin";

export default function SportPage() {
  return (
    <div className="bg-image">
      <NextSeoPage />
      <div className="home">
        <div className="container">
          <div className="hero-area">
            <PromotionDetail />
            <GameSheet />
            <BacaraDetail />
            <div className="bg-image shootfish">
              <ShootFishDetail />
              <GameSheetfish />
            </div>
            <div className="bg-image slot">
              <SlotDetail />
              <GameSheetspin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
