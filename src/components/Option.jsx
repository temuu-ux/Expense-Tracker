import { category } from "@/pages/utils/lastDRecord";

export function Option() {
  return (
    <select className="select select-bordered w-full  text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Choose
      </option>
      {category.map((e) => {
        return <option>{e.cateName}</option>;
      })}
    </select>
  );
}

export function Option2() {
  return (
    <select className="select select-bordered  max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Oct 30, 2023
      </option>
      <option>Oct 29, 2023</option>
      <option>Oct 28, 2023</option>
    </select>
  );
}
export function Option3() {
  return (
    <select className="select select-bordered max-w-xs w-[168px] text-[#0F172A]] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        4:15 PM
      </option>
      <option>3:32 PM</option>
      <option>9:23 AM</option>
    </select>
  );
}

export function Option4() {
  return (
    <select className="select select-bordered max-w-xs w-full text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Write here
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
}
