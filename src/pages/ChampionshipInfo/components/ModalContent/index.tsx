import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import Award from "../Award";
import Confirm from "../Confirm";
import Confirmed from "../Confirmed";
import { useNavigation } from "@react-navigation/native";

interface ModalItemProps {
  onFinish?: () => void;
}
const ModalContent: React.FC<ModalItemProps> = ({ onFinish }) => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  /* useEffect(() => {
    if (step === 1 || step === 3)
      setTimeout(() => setStep((prev) => prev + 1), 1000);
  }, [step]); */

  return (
    <Container>
      {step === 1 && <Confirm onConfirm={() => setStep(prev => prev + 1)} />}
      {step === 2 && <Confirmed onCheckIn={() => setStep(prev => prev + 1)} />}
      {step === 3 && <Award onContinues={() => onFinish?.()} />}
    </Container>
  );
};

export default ModalContent;
