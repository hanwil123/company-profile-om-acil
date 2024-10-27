import Link from "next/link";
import React from "react";

export default function PracticeAreaComponent() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Link href="/Views/PracticeArea/Aviation">
          <div className=" p-5 border rounded-lg border-white text-center">
            Aviation
          </div>
        </Link>
        <Link href="/Views/PracticeArea/EmploymentLaw">
          <div className=" p-5 border rounded-lg border-white text-center">
            Employment Law
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Dispute Resolution
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Suspensions of Debt Payment Obligation
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Merger & Acquisition
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Banking & Finance
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Capital Market
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Corporate and Commercial
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            Competition Law
          </div>
        </Link>
        <Link href="/Views/PracticeArea/PracticeArea">
          <div className=" p-5 border rounded-lg border-white text-center">
            NSMP Expertise and Practice Relating to Sectors
          </div>
        </Link>
      </div>
    </>
  );
}
