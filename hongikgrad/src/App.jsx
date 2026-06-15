import { useEffect, useState } from "react"
import { parseCourses, parseTotalCredits } from "./parser"
import { filterCourses, calcCredits } from "./creditSum"
import { REQ_GYOYANG_PIL, REQ_DRAGONBALL, checkRequirements } from "./requirements"
import { MSC_REQS } from "./msc"
import KakaoAd from "./KakaoAd"
import "./App.css"

const majorModules = import.meta.glob("./majors/*.js", { eager: true })
const MAJORS = Object.fromEntries(
  Object.entries(majorModules).map(([path, mod]) => [
    path.replace("./majors/", "").replace(".js", ""),
    mod,
  ])
)

const COLLEGES = {
  융합전공: [],
  공과대학: [
    ["CivilandEnvironmentalEngineering", "건설환경공학과"],
    ["EEE", "전자·전기공학부"],
    ["MaterialsScienceandEngineering", "신소재공학전공"],
    ["Chemical Engineering", "화학공학전공"],
    ["computerScience", "컴퓨터공학과"],
    ["Industrial andDataEngineering", "산업·데이터공학과"],
    ["MechanicalandSystemDesignEngineering", "기계·시스템디자인공학과"],
  ],
  건축도시대학: [
    ["architecture", "건축학전공"]

  ],
  경영대학: [["business", "경영학부"]],
  디자인·예술경영학부: [],
  문과대학: [],
  법과대학: [],
  경제학부: [],
  사범대학: [],
    미술대학: [
    ["visualDesign", "시각디자인학과"],
    ["FineArts", "회화과"],
  ],
  공연예술학부: [],
  AID융합과학기술대학: [],
  상경대학: [],
  광고홍보학부: [],
  스포츠지도학과: [],
  조형대학: [],
  게임학부: [],
}

const STEPS = ["클래스넷", "전체성적조회", "Ctrl+A", "복사", "아래에 붙여넣기", "졸업요건확인 버튼"]

function InputPage({ onSubmit }) {
  const [text, setText] = useState("")
  const [college, setCollege] = useState("")
  const [major, setMajor] = useState("")
  const [error, setError] = useState("")

  function handleCheck() {
    if (!college) return setError("단과대를 선택해 주세요.")
    if (!major) return setError("전공을 선택해 주세요.")
    if (!text.trim()) return setError("성적 내용을 붙여넣어 주세요.")

    const ids = filterCourses(parseCourses(text))

    if (ids.length === 0) {
      setError("과목을 찾을 수 없습니다. 전체성적조회 화면을 복사했는지 확인해 주세요.")
      return
    }

    setError("")

    const takenSet = new Set(ids)
    const { REQ: majorReq, MAJOR_IDS: majorIds, CREDITS: creditMap, MSC: mscTrack } = MAJORS[major]
    const totalCredits = parseTotalCredits(text)
    const { majorCredits } = calcCredits(takenSet, majorIds, creditMap)

    const reqList = [REQ_GYOYANG_PIL, REQ_DRAGONBALL]
    if (Array.isArray(majorReq)) reqList.push(...majorReq)
    else reqList.push(majorReq)

    const mscReq = mscTrack ? MSC_REQS[mscTrack] : null
    if (mscReq) Array.isArray(mscReq) ? reqList.push(...mscReq) : reqList.push(mscReq)

    const results = checkRequirements(takenSet, reqList)
    onSubmit({ results, totalCredits, majorCredits })
  }

  return (
    <>
      <header className="header">
        <h1>홍익 졸업요건</h1>
      </header>

      <main className="main">
        <div className="info-card">
          <p>
            <b>홍익졸업요건은</b>
            <br />
            홍익대학교 학생들이 졸업을 위해 필요한 수업들을 한번에 확인할 수 있도록 제작된 웹사이트입니다.
          </p>

          <div className="steps">
            <span className="steps-label">사용방법</span>
            {STEPS.map((step, i) => (
              <span key={step} className="step-group">
                <span className="step-item">{step}</span>
                {i < STEPS.length - 1 && <span className="step-arrow">→</span>}
              </span>
            ))}
          </div>

          <p className="info-note">* 수강한 강의 외의 개인정보는 절대 저장하거나 처리하지 않습니다</p>
        </div>

        <div className="textbox-wrapper">
          <div className="textbox-label">
            <span>전체성적 붙여넣기</span>

            <div className="select-group">
              <select
                className="major-select"
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value)
                  setMajor("")
                  setError("")
                }}
              >
                <option value="" disabled>단과대</option>
                {Object.keys(COLLEGES).map((collegeName) => (
                  <option key={collegeName} value={collegeName}>
                    {collegeName}
                  </option>
                ))}
              </select>

              <select
                className="major-select"
                value={major}
                disabled={!college}
                onChange={(e) => {
                  setMajor(e.target.value)
                  setError("")
                }}
              >
                <option value="" disabled>전공</option>
                {college &&
                  COLLEGES[college].map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              setError("")
            }}
            placeholder="클래스넷에서 복사한 전체성적 내용을 여기에 붙여넣으세요."
          />
        </div>

        {error && <div className="result-error">{error}</div>}

        <button className="btn-check" onClick={handleCheck}>
          졸업요건 확인
        </button>
      </main>
    </>
  )
}

function ResultPage({ results, totalCredits, majorCredits, onBack }) {
  const allMet = results.every((r) => r.met)

  return (
    <>
      <header className="header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h1>졸업요건 결과</h1>
      </header>

      <main className="main result-layout">
        <aside className="side-ad left-ad">
          <KakaoAd unit="DAN-bDF9Z3hSDq4ysUwF" width="160" height="600" />
        </aside>

        <section className="result-content">
          <div className={`summary-banner ${allMet ? "all-met" : "partial"}`}>
            <div className="summary-icon">{allMet ? "🎓" : "📋"}</div>
            <div className="summary-title">
              {allMet ? "모든 필수 요건을 충족했습니다!" : "아직 충족하지 않은 요건이 있습니다"}
            </div>
          </div>

          <div className="credit-card">
            <div className="credit-row">
              <span className="credit-label">총 학점</span>
              <span className="credit-value">
                <span className={`credit-num ${totalCredits >= 132 ? "met" : "unmet"}`}>{totalCredits}</span>
                <span className="credit-denom"> / 132</span>
              </span>
              <span className={`credit-badge ${totalCredits >= 132 ? "met" : "unmet"}`}>
                {totalCredits >= 132 ? "충족" : `${132 - totalCredits}학점 부족`}
              </span>
            </div>

            <div className="credit-divider" />

            <div className="credit-row">
              <span className="credit-label">전공 학점</span>
              <span className="credit-value">
                <span className={`credit-num ${majorCredits >= 50 ? "met" : "unmet"}`}>{majorCredits}</span>
                <span className="credit-denom"> / 50</span>
              </span>
              <span className={`credit-badge ${majorCredits >= 50 ? "met" : "unmet"}`}>
                {majorCredits >= 50 ? "충족" : `${50 - majorCredits}학점 부족`}
              </span>
            </div>
          </div>

          {(() => {
            const eachGroups = {}
            const order = []
            const seen = new Set()

            for (const r of results) {
              if (r.type === "each") {
                ;(eachGroups[r.category] ??= []).push(r)
                if (!seen.has(r.category)) {
                  seen.add(r.category)
                  order.push(r)
                }
              } else {
                order.push(r)
              }
            }

            return order.map((r) => {
              if (r.type === "each") return <EachCard key={r.category} category={r.category} items={eachGroups[r.category]} />
              if (r.type === "nOf") return <NOfCard key={r.category} result={r} />
              if (r.type === "creditSection") return <CreditSectionCard key={r.category} result={r} />
              if (r.type === "mscCombined") return <MSCCombinedCard key={r.category} result={r} />
              return null
            })
          })()}
        </section>

        <aside className="side-ad right-ad">
          <KakaoAd unit="DAN-bDF9Z3hSDq4ysUwF" width="160" height="600" />
        </aside>
      </main>
    </>
  )
}

function EachCard({ category, items }) {
  const catMet = items.filter((r) => r.met).length

  return (
    <div className="req-card">
      <div className="req-card-header">
        <span>{category}</span>
        <span className={`cat-badge ${catMet === items.length ? "all-met" : ""}`}>
          {catMet} / {items.length}
        </span>
      </div>

      {items.map((item) => (
        <div key={item.label} className={`req-row ${item.met ? "met" : "unmet"}`}>
          <span className="req-icon">{item.met ? "✓" : "✗"}</span>
          <span className="req-name">{item.label}</span>
          {item.met ? (
            <span className="req-chip met-chip">
              {item.showName ? `${item.matchedName} ` : ""}
              이수완료
            </span>
          ) : (
            <span className="req-chip unmet-chip">미이수</span>
          )}
        </div>
      ))}
    </div>
  )
}

function CreditSectionCard({ result }) {
  return (
    <div className="credit-card">
      <div className="req-card-header" style={{ padding: "0 0 8px 0" }}>
        <span>{result.category}</span>
      </div>

      {result.sections.map((section, i) => (
        <div key={section.label}>
          {i > 0 && <div className="credit-divider" />}
          <div className="credit-row">
            <span className="credit-label">{section.label}</span>
            <span className="credit-value">
              <span className={`credit-num ${section.met ? "met" : "unmet"}`}>{section.earned}</span>
              <span className="credit-denom"> / {section.required}</span>
            </span>
            <span className={`credit-badge ${section.met ? "met" : "unmet"}`}>
              {section.met ? "충족" : `${section.required - section.earned}학점 부족`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function MSCCombinedCard({ result }) {
  return (
    <div className="req-card">
      <div className="req-card-header">
        <span>{result.category}</span>
      </div>

      {result.sections.map((section, i) => (
        <div key={section.label}>
          {i > 0 && <div className="credit-divider" />}
          <div className="credit-row">
            <span className="credit-label">{section.label}</span>
            <span className="credit-value">
              <span className={`credit-num ${section.met ? "met" : "unmet"}`}>{section.earned}</span>
              <span className="credit-denom"> / {section.required}</span>
            </span>
            <span className={`credit-badge ${section.met ? "met" : "unmet"}`}>
              {section.met ? "충족" : `${section.required - section.earned}학점 부족`}
            </span>
          </div>
        </div>
      ))}

      <div className="credit-divider" />

      {result.eachItems.map((item) => (
        <div key={item.label} className={`req-row ${item.met ? "met" : "unmet"}`}>
          <span className="req-icon">{item.met ? "✓" : "✗"}</span>
          <span className="req-name">{item.label}</span>
          <span className={`req-chip ${item.met ? "met-chip" : "unmet-chip"}`}>
            {item.met ? "이수완료" : "미이수"}
          </span>
        </div>
      ))}
    </div>
  )
}

function NOfCard({ result }) {
  return (
    <div className="req-card">
      <div className="req-card-header">
        <span>{result.category}</span>
        <span className={`cat-badge ${result.met ? "all-met" : ""}`}>
          {result.metCount} / {result.total} 영역 ({result.required}개 이상)
        </span>
      </div>

      {result.areas.map((area) => (
        <div key={area.label} className={`req-row ${area.met ? "met" : "unmet"}`}>
          <span className="req-icon">{area.met ? "✓" : "✗"}</span>
          <span className="req-name">{area.label}</span>
          {area.met ? (
            <span className="req-chip met-chip">{area.matchedName} 이수완료</span>
          ) : (
            <span className="req-chip unmet-chip">미이수</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const handlePopState = () => setData(null)

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  function handleSubmit(resultData) {
    window.history.pushState({ page: "result" }, "")
    setData(resultData)
  }

  function handleBack() {
    window.history.back()
  }

  return (
    <>
      {data ? (
        <ResultPage
          results={data.results}
          totalCredits={data.totalCredits}
          majorCredits={data.majorCredits}
          onBack={handleBack}
        />
      ) : (
        <InputPage onSubmit={handleSubmit} />
      )}

      {data && (
        <div className="bottom-ad">
          <KakaoAd unit="DAN-t7NIlBeZk6DYCUgC" width="728" height="90" />
        </div>
      )}

      <footer
        style={{
          textAlign: "center",
          padding: "16px",
          fontSize: "13px",
          color: "#888",
          marginTop: "32px",
        }}
      >
        Copyright 2026. 김형준 &amp; 김범수 All rights reserved.
      </footer>
    </>
  )
}