import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import LookingOpponent from "../LookingOpponent";
import OpponentFound from "../OpponentFound";
import WaitingOpponent from "../WaitingOpponent";
import ChallengeAccepted from "../ChallengeAccepted";
import { useNavigation } from "@react-navigation/native";

interface ModalItemProps {
  onFinish?: () => void;
}
const ModalContent: React.FC<ModalItemProps> = ({ onFinish }) => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1 || step === 3)
      setTimeout(() => setStep((prev) => prev + 1), 2000);
  }, [step]);

  return (
    <Container>
      {step === 1 && <LookingOpponent />}
      {step === 2 && (
        <OpponentFound sendChallange={() => setStep((prev) => prev + 1)} />
      )}
      {step === 3 && <WaitingOpponent />}
      {step === 4 && <ChallengeAccepted onPlay={() => onFinish?.()} />}
    </Container>
  );
};

export default ModalContent;
