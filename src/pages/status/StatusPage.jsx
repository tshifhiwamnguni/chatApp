import React from "react";
import { Outlet } from "react-router-dom";
import ContactsHead from "../../components/ContactsHead/contactHead/ContactsHead";
import StatusCard from "../../components/statusCard/StatusCard";

function StatusPage() {
  return (
    <div className="main">
        <ContactsHead/>
      {[1, 1, 1, 1, 1].map((element, i) => {
        return <StatusCard key={i} />;
      })}
    </div>
  );
}

export default StatusPage;
