import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";

export default function Registry() {
  return (
    <div class={wind({
      display: "flex",
      paddingY: "py-16",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-pink-500",
      backgroundImageGradientEnd: "to-yellow-500"
    }).class()}>
      <div class={daisy("card")({addedClass: wind({boxShadow: "shadow-xl"}).class(), color: "bg-base-100"})}>
        <div class={daisy("card-body")({})}>
          <article class={daisy("prose")({})}>
            <h1 class={wind({ alignSelf: "self-center" }).class()}>Registry</h1>
            <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
            <p>Gifts are NOT expected or necessary, so please don’t feel obligated; your presence at our party and in our lives is gift enough! However, if you’d still like to give a gift, there are a few options:</p>
            <h2>🎓 Contribute to our future family’s education fund</h2>
            <p>It’s never too early to start saving for college! Okay, maybe some would argue that this is a bit early, but the earlier we start saving, the more the funds can grow (tax-free!). We’ve created a Washington 529 “GET” prepaid tuition plan that allows us (and family and friends like you) to purchase “units” of tuition at today’s price to be used in the future. The GET account is currently in our name, but the beneficiary can be easily switched to a new child once they have a SSN.</p>
            <p>GET Account: <strong>22001963</strong></p>
            <p><a>Instructions on how to make a gift can be found here.</a></p>
            <h2>⛱️ Contribute to our belated honeymoon fund</h2>
            <p>Life has been crazy since the winter wedding, so we haven’t had a chance for a honeymoon vacation yet! We plan to go on one this fall though. If you'd like to buy us a vacation dinner, you can contribute using either of the following:</p>
              <ul>
                <li><a>Venmo</a></li>
                <li><a>Zelle</a></li>
              </ul>
            <h2>😇 Make a charitable donation to a cause that we value</h2>
            <p>Charitable giving is very important to us, so we’d love to see any contributions to these wonderful causes. We’ve verified that all non-profits listed are well-run organizations with a great track record of getting money where it should be rather than spending it on admin and marketing.</p>
            <p><strong>Tax efficiency note:</strong> If you do go this route, and have unrealized gains in stocks that you've held for at least one year, you can donate them to charity by transferring the stocks to our donor advised fund and letting me know which specific charity you'd like the contribution to fund. This results in more money going to charity because:</p>
            <ul>
              <li>Neither you nor the charity has to pay capital gains on the transferred stocks</li>
              <li>You can claim a tax deduction for the full market value of the transferred stocks and use that money saved on taxes to increase the size of your donation</li>
            </ul>
            <p>The process for this varies by brokerage, but our donor advised fund is:<br/><strong>The Pakko Giving Fund (Fidelity Charitable Account #1238489)</strong></p>
            <p>You can also contribute to any of our selected charities via the following links:</p>
            <ul>
              <li><a>Cancer Research Institute</a></li>
              <li><a>The Conservation Fund</a></li>
              <li><a>Pathfinder International</a></li>
              <li><a>Khan Academy</a></li>
              <li><a>Seattle Area Feline Rescue</a></li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}