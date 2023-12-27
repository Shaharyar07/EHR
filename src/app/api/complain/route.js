import prisma from "@app/utils/prismadb";

export async function POST(request) {
  // console.log(prisma);
  const body = await request.json();
  console.log(body);

  const {
    patientId,
    complaint,
    complainHistory,
    symptomHistory,
    familyHistory,
    comorbidities,
    physicalExamination,
    transfusionHistory,
    cbc,
    labTests,
  } = body;
  try {
    //check if complain already exists
    const complain = await prisma.complains.findUnique({
      where: {
        patientId,
      },
    });

    if (complain) {
      return new Response(
        JSON.stringify({
          data: {
            status: 400,
            message: "Complain already exists",
          },
        })
      );
    }
    const complainHistoryFormatted = {
      //convert to string from array
      ...complainHistory,
      painCharacter: complainHistory?.painCharacter[0],
      timing: complainHistory?.timing[0],
      alleviatingFactors: complainHistory?.alleviatingFactors[0],
      symptoms: complainHistory?.symptoms[0],
    };
    // console.log("Complain Formatted: ", complainHistoryFormatted);

    const symptomHistoryFormatted = {
      ...symptomHistory,
      durationSymptom: symptomHistory.durationSymptom[0],
    };
    // console.log("Symptom Formatted: ", symptomHistoryFormatted);

    const comorbiditiesFormatted = {
      ...comorbidities,
      tb: comorbidities.tb[0],
      chemoTherapy: comorbidities.chemoTherapy[0],
      radiations: comorbidities.radiations[0],
      smoking: comorbidities.smoking[0],
      alcohol: comorbidities.alcohol[0],
      historyOfCancer: comorbidities.historyOfCancer[0],
      HIV: comorbidities.HIV[0],
    };

    // console.log("Comorbidities Formatted: ", comorbiditiesFormatted);
    const physicalExaminationFormatted = {
      ...physicalExamination,
      lymphadenopathy: physicalExamination.lymphadenopathy[0],
      mediationalMasses: physicalExamination.mediationalMasses[0],
    };
    // console.log(
    //   "Physical Examination Formatted: ",
    //   physicalExaminationFormatted
    // );

    const transfusionHistoryFormatted = {
      ...transfusionHistory,
      transfusionInPast: transfusionHistory.transfusionInPast[0],
      transfusionReaction: transfusionHistory.transfusionReaction[0],
      transplant: transfusionHistory.transplant[0],
      medicalHistory: transfusionHistory.medicalHistory.medicalHistory,
    };
    // console.log("Transfusion History Formatted: ", transfusionHistoryFormatted);
    const [
      newComplaint,
      newComplainHistory,
      newSymptomHistory,
      newFamilyHistory,
      newComorbidities,
      newPhysicalExamination,
      newTransfusionHistory,
      newCbc,
      newLabTests,
    ] = await prisma.$transaction([
      prisma.complains.create({
        data: {
          patientId,
          complaint,
        },
      }),
      prisma.complainHistory.create({
        data: {
          patientId,
          ...complainHistoryFormatted,
        },
      }),

      prisma.symptomHistory.create({
        data: {
          patientId,
          ...symptomHistoryFormatted,
        },
      }),

      prisma.familyHistory.create({
        data: {
          patientId,
          ...familyHistory,
        },
      }),

      prisma.comorbidities.create({
        data: {
          patientId,
          ...comorbiditiesFormatted,
        },
      }),

      prisma.physicalExamination.create({
        data: {
          patientId,
          ...physicalExaminationFormatted,
        },
      }),

      prisma.transfusionAndTransplantHistory.create({
        data: {
          patientId,
          ...transfusionHistoryFormatted,
        },
      }),

      prisma.cBC.create({
        data: {
          patientId,
          ...cbc,
        },
      }),

      prisma.labTests.create({
        data: {
          patientId,
          ...labTests,
        },
      }),
    ]);

    if (
      !newComplaint ||
      !newComplainHistory ||
      !newSymptomHistory ||
      !newFamilyHistory ||
      !newComorbidities ||
      !newPhysicalExamination ||
      !newTransfusionHistory ||
      !newCbc ||
      !newLabTests
    ) {
      return new Response(
        JSON.stringify({
          data: {
            status: 404,
            message: "Some error occurred with creating a complain",
          },
        })
      );
    }

    return new Response(
      JSON.stringify({
        data: {
          status: 200,
          message: "Complain created successfully!!!",
        },
      })
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        data: {
          status: 500,
          error: "Some error occurred with creating a complain",
        },
      })
    );
  }
}
