import React, { useEffect, useRef, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Line from "./Line";
import { toPng } from "html-to-image";
// @ts-expect-error FIXME:
import ResizableBox from "./ResizableBox";
import "./App.css";
// import Table from "./Table";

const App = () => {
  const data = React.useMemo(
    () => [
      {
        label: "ДОЖДЬ",
        secondaryAxisId: "2",
        color: "blue",
        data: [
          { primary: "5", secondary: 1 },
          { primary: "5", secondary: 20 },
          // { primary: "7", secondary: 3 },
          // { primary: "8", secondary: 4 },
          // { primary: "9", secondary: 5 },
          // { primary: "10", secondary: 6 },
          // { primary: "11", secondary: 7 },
          // { primary: "12", secondary: 8 },
          // { primary: "13", secondary: 9 },
        ],
      },

      {
        label: "Датчик 1 NORM",
        color: "green",
        data: [
          { primary: "1", secondary: 1 },
          { primary: "2", secondary: 2 },
          { primary: "3", secondary: 2 },
          { primary: "4", secondary: 3 },
          { primary: "5", secondary: 4 },
        ],
      },
      {
        label: "Датчик 1 WARN",
        color: "yellow",
        data: [
          { primary: "5", secondary: 4 },
          { primary: "6", secondary: 6 },
          { primary: "7", secondary: 7 },
          { primary: "8", secondary: 8 },
          { primary: "9", secondary: 9 },
        ],
      },
      {
        label: "Датчик 1 STOP",
        data: [
          { primary: "9", secondary: 9 },
          { primary: "10", secondary: 10 },
          { primary: "11", secondary: 11 },
          { primary: "12", secondary: 12 },
          { primary: "13", secondary: 13 },
        ],
        color: "red",
      },
      {
        label: "Датчик 1 STOP",
        data: [
          { primary: "13", secondary: 13 },
          { primary: "14", secondary: 14 },
          { primary: "15", secondary: 14.2 },
          { primary: "16", secondary: 13 },
          { primary: "17", secondary: 9 },
        ],
        color: "red",
      },
      {
        label: "Датчик 1 WARN",
        data: [
          { primary: "17", secondary: 9 },
          { primary: "18", secondary: 9 },
          { primary: "19", secondary: 8 },
          { primary: "20", secondary: 6 },
          { primary: "21", secondary: 4 },
        ],
        color: "yellow",
      },
      {
        label: "Датчик 1 NORM",
        data: [
          { primary: "21", secondary: 4 },
          { primary: "22", secondary: 4 },
          { primary: "23", secondary: 4 },
          { primary: "24", secondary: 2 },
          { primary: "25", secondary: 3 },
        ],
        color: "green",
      },
    ],
    []
  );

  const data2 = React.useMemo(
    () => [
      {
        label: "ДОЖДЬ",
        secondaryAxisId: "2",
        color: "blue",
        data: [
          { primary: "5", secondary: 1 },
          { primary: "6", secondary: 2 },
          { primary: "7", secondary: 3 },
          { primary: "8", secondary: 4 },
          { primary: "9", secondary: 5 },
          { primary: "10", secondary: 6 },
          { primary: "11", secondary: 7 },
          { primary: "12", secondary: 8 },
          { primary: "13", secondary: 9 },
        ],
      },

      {
        label: "Датчик 2 NORM",
        color: "green",
        data: [
          { primary: "1", secondary: 1 },
          { primary: "2", secondary: 2 },
          { primary: "3", secondary: 2 },
          { primary: "4", secondary: 2 },
          { primary: "5", secondary: 5 },
        ],
      },
      {
        label: "Датчик 2 WARN",
        color: "yellow",
        data: [
          { primary: "5", secondary: 5 },
          { primary: "6", secondary: 6 },
          { primary: "7", secondary: 12 },
        ],
      },
      {
        label: "Датчик 2 STOP",
        data: [
          { primary: "7", secondary: 12 },
          { primary: "8", secondary: 15 },
          { primary: "9", secondary: 17 },
          { primary: "10", secondary: 20 },
          { primary: "11", secondary: 22 },
        ],
        color: "red",
      },
      {
        label: "Датчик 2 STOP",
        data: [
          { primary: "11", secondary: 22 },
          { primary: "12", secondary: 20 },
          { primary: "13", secondary: 12 },
        ],
        color: "red",
      },
      {
        label: "Датчик 2 WARN",
        data: [
          { primary: "13", secondary: 12 },
          { primary: "14", secondary: 12 },
          { primary: "15", secondary: 11 },
        ],
        color: "yellow",
      },
      {
        label: "Датчик 2 WARN",
        data: [
          { primary: "15", secondary: 11 },
          { primary: "16", secondary: 9 },
          { primary: "17", secondary: 8 },
          { primary: "18", secondary: 6 },
          { primary: "19", secondary: 4 },
        ],
        color: "yellow",
      },
      {
        label: "Датчик 2 NORM",
        data: [
          { primary: "19", secondary: 4 },
          { primary: "20", secondary: 4 },
          { primary: "21", secondary: 4 },
          { primary: "22", secondary: 2 },
          { primary: "23", secondary: 3 },
          { primary: "24", secondary: 3 },
          { primary: "25", secondary: 3 },
        ],
        color: "green",
      },
    ],
    []
  );

  const styles = StyleSheet.create({
    chartContainer: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 20,
    },
    chartTitle: {
      fontSize: 16,
      marginBottom: 10,
    },
  });

  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartContainerRef.current === null) {
      return;
    }

    const dataUrl = toPng(chartContainerRef.current);
    // @ts-expect-error FIXME:
    setChart(dataUrl);
  }, [chartContainerRef]);

  // Generate the PDF content using react-pdf
  const pdfContent = (
    <Document>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Sample Chart</Text>
          <>
            {chart && <Image src={() => toPng(chartContainerRef.current!)} />}
          </>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* <button onClick={randomizeData}>Randomize Data</button> */}
        <PDFDownloadLink document={pdfContent} fileName="test.pdf">
          Save as PDF
        </PDFDownloadLink>
      </div>
      <br />
      <div ref={chartContainerRef}>
        <Line data={data} data2={data2} />
        {/* <Table data={data} /> */}
      </div>
    </>
  );
};

export default App;
