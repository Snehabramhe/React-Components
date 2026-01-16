/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function ElementClickCalender() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="30min"
    data-cal-link="sneha-bramhe-hg2d65/30min"
    
    data-cal-config='{"layout":"month_view"}'

    className="border-2 px-4 py-2 bg-gray-600 text-white font-bold"
  >Click me</button>;
};
  