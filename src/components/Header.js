import { moneyFormat } from "../formatter.js";

function Header({ money, total }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>${moneyFormat(money - total)}</span> paran kaldı!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span> ${moneyFormat(money)} </span> paranız var!
        </div>
      )}
      {money - total === 0 && (
        <div className="header">Paran bitti! Tasarruflu harcamayı öğrenmelisin.</div>
      )}
    </>
  );
}

export default Header;