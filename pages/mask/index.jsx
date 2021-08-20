import PromotionDetail from "./PromotionDetail";
import NextSeoPage from "./NextSeoPage";
import GameSheet from "./GameSheet";
import BacaraDetail from "./BacaraDetail";
import ShootFishDetail from "./ShootFishDetail";
import GameSheetfish from "./GameSheetfish";
import SlotDetail from "./SlotDetail";
import GameSheetspin from "./GameSheetspin";
import Mask from "./Mask";

export default function MaskPage() {
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
          <Mask />
        </div>
      </div>
    </div>
  );
}
