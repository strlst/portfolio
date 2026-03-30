"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

type Lang = "en" | "ja";

const IconFolder = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconCodeberg = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12 12 12 0 0 0-.045 0zm.375 6.467l4.416 16.553a12 12 0 0 0 5.137-4.213z" />
  </svg>
);

const IconGitLab = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z" />
  </svg>
);

const IconPdf = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// types

type IconType = "github" | "codeberg" | "gitlab" | "gitlab-tu";

interface CardData {
  category: string;
  title: string;
  desc: ReactNode;
  tags: string[];
  link: string;
  icon: IconType;
  delay: number;
}

interface SkillGroup {
  label: string;
  pills: string[];
}

interface LangContent {
  heroTagline: ReactNode;
  nav: {
    software: string;
    hardware: string;
    skills: string;
  };
  softwareTitle: [string, string]; // [plain, accent]
  hardwareTitle: [string, string];
  skillsTitle: [string, string];
  fpgaBtn: { title: string; sub: string };
  softwareCards: CardData[];
  hardwareCards: CardData[];
  skillGroups: SkillGroup[];
  footerCopy: ReactNode;
}

// content

const CONTENT: Record<Lang, LangContent> = {
  en: {
    heroTagline: (
      <>
        A systems, software &amp; hardware engineer.
        <br />
        Studying at the intersection of{" "}
        <strong>CPUs, FPGAs, compilers and software</strong>. Looking for{" "}
        <strong>long-term employment</strong> in Japan, doing meaningful work.
      </>
    ),
    nav: {
      software: "Software",
      hardware: "Hardware & Embedded",
      skills: "Skills",
    },
    softwareTitle: ["Software ", "Projects"],
    hardwareTitle: ["Hardware & ", "Embedded"],
    skillsTitle: ["Skills & ", "Experience"],
    fpgaBtn: {
      title: "FPGA経験プレゼン（日本語）",
      sub: "Full FPGA project portfolio PDF",
    },
    softwareCards: [
      {
        category: "SECURE CPU ARCHITECTURE",
        title: "AIM (gem5)",
        desc: (
          <>
            Fork of the gem5 CPU simulator extended with a full Trusted
            Execution Environment (TEE) framework. Implements AES counter-mode
            encryption and Intel SGX-style counter trees for integrity
            verification, protecting against spoofing, slicing, and replay
            attacks.
          </>
        ),
        tags: ["C++", "Python", "TEE", "RISC-V"],
        link: "https://github.com/strlst/gem5",
        icon: "github",
        delay: 0,
      },
      {
        category: "ALGORITHMS",
        title: "Advent of Code",
        desc: (
          <>
            Ongoing solutions for Advent of Code (yearly) programming
            challenges. Covers a wide range of algorithmic topics from dynamic
            programming to graph theory and combinatorics.
          </>
        ),
        tags: ["Python", "Algorithms"],
        link: "https://codeberg.org/strlst/aoc",
        icon: "codeberg",
        delay: 640,
      },
      {
        category: "ML",
        title: "microgpt-cpp",
        desc: (
          <>
            C++ recreation of Karpathy&apos;s <em>microgpt.py</em> to understand
            forward and backward passes of a GPT-style language model from
            scratch. Achieves a <strong>4.5x speedup</strong> over the Python
            reference.
          </>
        ),
        tags: ["C++", "Python", "GPT2"],
        link: "https://github.com/strlst/microgpt-cpp",
        icon: "github",
        delay: 80,
      },
      {
        category: "CLI",
        title: "strlst-go",
        desc: (
          <>
            Small, personal Go CLI to use git provider static site hosting (in
            this case, codeberg.page) to host personal files with built-in
            versioning and symmetrical <em>encryption</em> (using{" "}
            <em>OpenSSL</em>). Go rewrite of a Shell script.
          </>
        ),
        tags: ["Go", "CLI", "OpenSSL"],
        link: "https://codeberg.org/strlst/strlst-go",
        icon: "codeberg",
        delay: 560,
      },
      {
        category: "GUI / LINUX",
        title: "cmus-rg",
        desc: (
          <>
            Graphical status display for the cmus music player, written in pure
            C with SDL2. Renders track metadata, progress and clickable controls
            by interfacing with <code>cmus-remote</code>. Supports album art via
            FFmpeg/libavformat.
          </>
        ),
        tags: ["C", "SDL2", "FFmpeg", "Linux"],
        link: "https://codeberg.org/strlst/cmus-rg",
        icon: "codeberg",
        delay: 240,
      },
      {
        category: "GRAPHICS / PNG",
        title: "spngfx",
        desc: (
          <>
            Image manipulation utility built on a custom, hand-written PNG
            library in C. A from-scratch exploration of the PNG specification
            and low-level graphics processing without third-party image
            libraries.
          </>
        ),
        tags: ["C", "PNG", "Image Processing"],
        link: "https://codeberg.org/strlst/spngfx",
        icon: "codeberg",
        delay: 480,
      },
      {
        category: "AI / WEB",
        title: "aibou (相棒)",
        desc: (
          <>
            A simple and elegant Groq-powered Flask chat interface.{" "}
            <em>Aibou</em> means &quot;partner&quot; in Japanese; the app offers an AI
            companion with a clean, minimalist conversational UI supporting a
            full speech-to-chat-to-speech (STT, chat, TTS) pipeline.
          </>
        ),
        tags: ["Python", "Flask", "Groq", "日本語"],
        link: "https://github.com/strlst/aibou",
        icon: "github",
        delay: 400,
      },
      {
        category: "ML / NLP",
        title: "imdbuddy",
        desc: (
          <>
            IMDB review sentiment analysis using parallel training in PyTorch.
            Explores data-parallel distributed training approaches to accelerate
            model convergence on review classification tasks.
          </>
        ),
        tags: ["Python", "PyTorch", "NLP"],
        link: "https://github.com/strlst/imdbuddy",
        icon: "github",
        delay: 160,
      },
      {
        category: "WEB",
        title: "perapera (ペラペラ)",
        desc: (
          <>
            A simple engineer vocabulary (エンジニア語彙) flashcard app. Builds
            on a dataset published by a kind developer at @mercari — a bilingual
            engineer vocabulary list — as a Bun/React/TypeScript stack demo.
          </>
        ),
        tags: ["TypeScript", "Web App", "日本語"],
        link: "https://github.com/strlst/perapera",
        icon: "github",
        delay: 320,
      },
    ],
    hardwareCards: [
      {
        category: "FPGA CPU DESIGN",
        title: "MiRiV + OS Extensions",
        desc: (
          <>
            Bachelor&apos;s thesis extending a custom 5-stage RISC-V CPU (rv32i)
            written in VHDL and C, with extensions M and Zicsr, a compliant
            interrupts/exceptions/trap architecture and a 2-stage branch
            predictor. Contains a custom BSP to run FreeRTOS on a real CPU core
            instantiated in an Altera FPGA.
          </>
        ),
        tags: ["RISC-V", "VHDL", "C", "OS"],
        link: "https://codeberg.org/strlst/riscv-bt",
        icon: "codeberg",
        delay: 0,
      },
      {
        category: "FPGA DEVELOPMENT",
        title: "HW/SW Co-design Lab",
        desc: (
          <>
            Lab group project accelerating a ray-tracing application on an FPGA
            (Intel NIOS 2 RISC-V softcore) from 40 <em>seconds per frame</em>{" "}
            to 10 <em>frames per second</em>, using a custom accelerator
            architecture developed with full design freedom.
          </>
        ),
        tags: ["VHDL", "RISC-V", "HW/SW Codesign"],
        link: "https://gitlab.com/strlst/hwsw_ws2023_maintask",
        icon: "gitlab",
        delay: 160,
      },
      {
        category: "HPC PARALLEL COMPUTING",
        title: "Multiprocessor Programming Lab",
        desc: (
          <>
            Implementation of the lock-free, linearizable parallel bag data
            structure from the paper &quot;A lock-free algorithm for concurrent
            bags&quot; in C + OpenMP.
          </>
        ),
        tags: ["C/C++", "OpenMP", "SIMD"],
        link: "https://codeberg.org/strlst/amp",
        icon: "codeberg",
        delay: 240,
      },
      {
        category: "INDUSTRIAL VERIFICATION",
        title: "I2C Controller Verification",
        desc: (
          <>
            Full functional coverage testing (100% without unreachable code) of
            a given, faulty I2C controller written in VHDL. Applies an
            industry-approved testing strategy, developing a test plan from a
            formal requirements document and linking each test to covered
            requirements.
          </>
        ),
        tags: ["VHDL", "OSVVM", "UVM", "SystemVerilog"],
        link: "https://gitlab.tuwien.ac.at/e11907086/ihv",
        icon: "gitlab-tu",
        delay: 240,
      },
      {
        category: "DIGITAL DESIGN",
        title: "Advanced Digital Design Lab",
        desc: (
          <>
            Real oscilloscope metastability measurements (effects of violated
            chip timing constraints), logic analyzer measurements of faulty
            clock-domain-crossing (CDC) and asynchronous control chip circuit
            designs (signal transition graphs).
          </>
        ),
        tags: ["VHDL", "Python", "Electronics"],
        link: "https://gitlab.com/strlst/addlu-ws2023",
        icon: "gitlab",
        delay: 240,
      },
      {
        category: "WIRELESS EMBEDDED",
        title: "Wireless in Automation Lab",
        desc: (
          <>
            Using the Bosch BME680 sensor to implement an emulated home
            automation solution (window opening based on air quality) for two
            Nordic Semi nRF52840 DK boards in C using Zephyr RTOS.
          </>
        ),
        tags: ["C", "Zephyr RTOS", "Embedded"],
        link: "https://gitlab.com/strlst/wia_ss2024",
        icon: "gitlab",
        delay: 240,
      },
    ],
    skillGroups: [
      {
        label: "Programming Languages",
        pills: ["C / C++", "Python", "Go", "Java", "SQL", "C#", "JavaScript", "HTML", "CSS"],
      },
      {
        label: "Libraries & Frameworks",
        pills: ["OpenMP", "OpenCL", "SDL2", "Flask", "PyTorch", "gem5"],
      },
      {
        label: "OS",
        pills: ["Void Linux", "Arch Linux", "Debian", "Ubuntu", "CentOS", "Rocky Linux", "buildroot"],
      },
      {
        label: "Hardware",
        pills: ["VHDL", "SystemVerilog", "RISC-V", "FPGA", "Quartus", "Vivado", "OSVVM", "UVM"],
      },
      {
        label: "Systems & DevOps",
        pills: ["Bash", "Docker", "MySQL", "CI/CD (Jenkins)", "Ansible", "CCNA", "git", "Make", "CMake"],
      },
      {
        label: "Languages",
        pills: ["English", "日本語", "German", "Romanian"],
      },
    ],
    footerCopy: (
      <>
        Plain HTML (originally), now Next.js, hosted on{" "}
        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
          GitHub Pages
        </a>
        .
      </>
    ),
  },

  // japanese text
  ja: {
    heroTagline: (
      <>
        システム・ソフトウェア・ハードウェアエンジニア。
        <br />
        <strong>CPU・FPGA・コンパイラ・ソフトウェア</strong>
        の交差点を探求中。日本での
        <strong>長期雇用</strong>
        を希望しており、意義のある仕事に取り組みたいと考えています。
      </>
    ),
    nav: {
      software: "ソフトウェア",
      hardware: "ハードウェア・組み込み",
      skills: "スキル",
    },
    softwareTitle: ["ソフトウェア", "プロジェクト"],
    hardwareTitle: ["ハードウェア・", "組み込み"],
    skillsTitle: ["スキル・", "経験"],
    fpgaBtn: {
      title: "FPGA経験プレゼン（日本語）",
      sub: "全部なFPGAで開発したプロジェクトに関してPDF",
    },
    softwareCards: [
      {
        category: "セキュアCPUアーキテクチャ",
        title: "AIM (gem5)",
        desc: (
          <>
            gem5 CPUシミュレータをフォークし、完全なTrusted Execution
            Environment（TEE）フレームワークを実装した拡張版。AESカウンタモード暗号化とIntel
            SGX方式のカウンタツリーによる整合性検証を実装し、スプーフィング・スライシング・リプレイ攻撃を防止。
          </>
        ),
        tags: ["C++", "Python", "TEE", "RISC-V"],
        link: "https://github.com/strlst/gem5",
        icon: "github",
        delay: 0,
      },
      {
        category: "アルゴリズム",
        title: "Advent of Code",
        desc: (
          <>
            Advent of Code（毎年開催）プログラミングチャレンジの解答集。動的計画法・グラフ理論・組み合わせ論など、幅広いアルゴリズムの題材を網羅。
          </>
        ),
        tags: ["Python", "アルゴリズム"],
        link: "https://codeberg.org/strlst/aoc",
        icon: "codeberg",
        delay: 640,
      },
      {
        category: "機械学習",
        title: "microgpt-cpp",
        desc: (
          <>
            KarpathyのPython実装 <em>microgpt.py</em>
            をC++で再現し、GPTスタイルの言語モデルの順伝播・逆伝播をゼロから理解することを目的としたプロジェクト。Pythonリファレンス実装比で
            <strong>4.5倍の高速化</strong>を達成。
          </>
        ),
        tags: ["C++", "Python", "GPT2"],
        link: "https://github.com/strlst/microgpt-cpp",
        icon: "github",
        delay: 80,
      },
      {
        category: "CLIツール",
        title: "strlst-go",
        desc: (
          <>
            Gitプロバイダーの静的サイトホスティング（codeberg.page）を利用して個人ファイルをバージョン管理付きで公開し、
            <em>OpenSSL</em>による対称暗号化も提供するGo製CLIツール。Shellスクリプトのリライト版。
          </>
        ),
        tags: ["Go", "CLI", "OpenSSL"],
        link: "https://codeberg.org/strlst/strlst-go",
        icon: "codeberg",
        delay: 560,
      },
      {
        category: "GUI / Linux",
        title: "cmus-rg",
        desc: (
          <>
            SDL2を使ったcmusミュージックプレイヤーのグラフィカル表示ツール。
            <code>cmus-remote</code>
            と連携してトラックメタデータ・進捗・クリック可能なコントロールをレンダリング。FFmpeg/libavformatによるアルバムアート表示に対応。
          </>
        ),
        tags: ["C", "SDL2", "FFmpeg", "Linux"],
        link: "https://codeberg.org/strlst/cmus-rg",
        icon: "codeberg",
        delay: 240,
      },
      {
        category: "グラフィックス / PNG",
        title: "spngfx",
        desc: (
          <>
            C言語でゼロから書いたカスタムPNGライブラリを基盤とした画像処理ユーティリティ。サードパーティ製画像ライブラリを一切使わず、PNG仕様と低レベルグラフィックス処理を探求。
          </>
        ),
        tags: ["C", "PNG", "画像処理"],
        link: "https://codeberg.org/strlst/spngfx",
        icon: "codeberg",
        delay: 480,
      },
      {
        category: "AI / Web",
        title: "aibou（相棒）",
        desc: (
          <>
            Groq搭載のシンプルかつエレガントなFlaskチャットインターフェース。「相棒」という名の通り、クリーンでミニマルなUIのAIコンパニオンで、音声認識→チャット→音声合成（STT・チャット・TTS）のパイプラインにも対応。
          </>
        ),
        tags: ["Python", "Flask", "Groq", "日本語"],
        link: "https://github.com/strlst/aibou",
        icon: "github",
        delay: 400,
      },
      {
        category: "機械学習 / 自然言語処理",
        title: "imdbuddy",
        desc: (
          <>
            PyTorchを用いた並列学習によるIMDBレビューの感情分析。データ並列分散学習アプローチを探求し、レビュー分類タスクのモデル収束を高速化。
          </>
        ),
        tags: ["Python", "PyTorch", "NLP"],
        link: "https://github.com/strlst/imdbuddy",
        icon: "github",
        delay: 160,
      },
      {
        category: "Webアプリ",
        title: "perapera（ペラペラ）",
        desc: (
          <>
            エンジニア語彙フラッシュカードアプリ。@mercariの開発者が公開したバイリンガルエンジニア語彙リストを活用し、Bun/React/TypeScriptスタックを試すデモとして制作。
          </>
        ),
        tags: ["TypeScript", "Webアプリ", "日本語"],
        link: "https://github.com/strlst/perapera",
        icon: "github",
        delay: 320,
      },
    ],
    hardwareCards: [
      {
        category: "FPGA CPUデザイン",
        title: "MiRiV + OS拡張",
        desc: (
          <>
            卒業論文プロジェクト。VHDLとCで実装したカスタム5ステージRISC-V
            CPU（rv32i）にM拡張・Zicsr拡張、割り込み/例外/トラップアーキテクチャ、2段階分岐予測器を追加。AlteraのFPGAに実装した実CPUコア上でFreeRTOSを動作させるカスタムBSPも含む。
          </>
        ),
        tags: ["RISC-V", "VHDL", "C", "OS"],
        link: "https://codeberg.org/strlst/riscv-bt",
        icon: "codeberg",
        delay: 0,
      },
      {
        category: "FPGA開発",
        title: "HW/SWコデザイン演習",
        desc: (
          <>
            FPGA上のソフトコアプロセッサ（Intel NIOS 2
            RISC-V）で動作するレイトレーシングアプリを、40
            <em>秒/フレーム</em>から10<em>フレーム/秒</em>
            へ高速化する演習。設計自由度を活かしたカスタムアクセラレータアーキテクチャを開発。
          </>
        ),
        tags: ["VHDL", "RISC-V", "HW/SWコデザイン"],
        link: "https://gitlab.com/strlst/hwsw_ws2023_maintask",
        icon: "gitlab",
        delay: 160,
      },
      {
        category: "HPC 並列計算",
        title: "マルチプロセッサプログラミング演習",
        desc: (
          <>
            論文「A lock-free algorithm for concurrent
            bags」に基づく、ロックフリーで線形化可能な並列バッグデータ構造をC
            + OpenMPで実装。
          </>
        ),
        tags: ["C/C++", "OpenMP", "SIMD"],
        link: "https://codeberg.org/strlst/amp",
        icon: "codeberg",
        delay: 240,
      },
      {
        category: "産業向け検証",
        title: "I2Cコントローラ検証",
        desc: (
          <>
            VHDL製の不具合あるI2Cコントローラに対して、到達不能コードを除く100%の機能カバレッジテストを実施。業界承認済みのテスト戦略を適用し、要件定義書からテスト計画を策定して各テストを要件にリンク。
          </>
        ),
        tags: ["VHDL", "OSVVM", "UVM", "SystemVerilog"],
        link: "https://gitlab.tuwien.ac.at/e11907086/ihv",
        icon: "gitlab-tu",
        delay: 240,
      },
      {
        category: "デジタル設計",
        title: "高度デジタル設計演習",
        desc: (
          <>
            実オシロスコープを用いたメタスタビリティ計測（チップタイミング制約違反の影響）、ロジックアナライザによるクロックドメイン境界（CDC）および非同期制御回路の不具合計測（信号遷移グラフ）。
          </>
        ),
        tags: ["VHDL", "Python", "電子回路"],
        link: "https://gitlab.com/strlst/addlu-ws2023",
        icon: "gitlab",
        delay: 240,
      },
      {
        category: "ワイヤレス組み込み",
        title: "オートメーション向けワイヤレス演習",
        desc: (
          <>
            Bosch
            BME680センサーを使い、Nordic Semi nRF52840
            DKボード2台でZephyr RTOSとCを用いて、空気質に基づく窓開閉ホームオートメーションをエミュレーション。
          </>
        ),
        tags: ["C", "Zephyr RTOS", "組み込み"],
        link: "https://gitlab.com/strlst/wia_ss2024",
        icon: "gitlab",
        delay: 240,
      },
    ],
    skillGroups: [
      {
        label: "プログラミング言語",
        pills: ["C / C++", "Python", "Go", "Java", "SQL", "C#", "JavaScript", "HTML", "CSS"],
      },
      {
        label: "ライブラリ・フレームワーク",
        pills: ["OpenMP", "OpenCL", "SDL2", "Flask", "PyTorch", "gem5"],
      },
      {
        label: "OS",
        pills: ["Void Linux", "Arch Linux", "Debian", "Ubuntu", "CentOS", "Rocky Linux", "buildroot"],
      },
      {
        label: "ハードウェア",
        pills: ["VHDL", "SystemVerilog", "RISC-V", "FPGA", "Quartus", "Vivado", "OSVVM", "UVM"],
      },
      {
        label: "システム・DevOps",
        pills: ["Bash", "Docker", "MySQL", "CI/CD (Jenkins)", "Ansible", "CCNA", "git", "Make", "CMake"],
      },
      {
        label: "言語",
        pills: ["英語", "日本語", "ドイツ語", "ルーマニア語"],
      },
    ],
    footerCopy: (
      <>
        Next.jsで創作、
        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
          GitHub Pages
        </a>
        にてホスト中。
      </>
    ),
  },
};

// sub-components

function RepoIcon({ type }: { type: IconType }) {
  if (type === "github") return <IconGitHub />;
  if (type === "codeberg") return <IconCodeberg />;
  return <IconGitLab />;
}

function Card({ data }: { data: CardData }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), data.delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [data.delay]);

  return (
    <article className="card" ref={ref}>
      <div className="card-top">
        <span className="card-folder">
          <IconFolder />
        </span>
        <div className="card-icons">
          <a
            className="card-icon-link"
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View on ${data.icon}`}
          >
            <RepoIcon type={data.icon} />
          </a>
        </div>
      </div>
      <div className="card-category">{data.category}</div>
      <h3 className="card-title">{data.title}</h3>
      <p className="card-desc">{data.desc}</p>
      <div className="card-tags">
        {data.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

// main page

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const c = CONTENT[lang];

  // Cursor spotlight
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.body.style.setProperty("--cx", e.clientX + "px");
      document.body.style.setProperty("--cy", e.clientY + "px");
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      {/* Nav */}
      <nav>
        <a className="nav-brand" href="#">
          strlst
        </a>
        <ul className="nav-links">
          <li>
            <a href="#software">{c.nav.software}</a>
          </li>
          <li>
            <a href="#hardware">{c.nav.hardware}</a>
          </li>
          <li>
            <a href="#skills">{c.nav.skills}</a>
          </li>
          <li>
            <a href="https://codeberg.org/strlst" target="_blank" rel="noopener noreferrer">
              Codeberg
            </a>
          </li>
          <li>
            <a href="https://github.com/strlst" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/strlst" target="_blank" rel="noopener noreferrer">
              GitLab
            </a>
          </li>
          <li>
            {/* Language toggle */}
            <div className="lang-toggle" role="group" aria-label="Language toggle">
              <button
                className={`lang-toggle-btn${lang === "en" ? " active" : ""}`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                className={`lang-toggle-btn${lang === "ja" ? " active" : ""}`}
                onClick={() => setLang("ja")}
                aria-pressed={lang === "ja"}
              >
                日本語
              </button>
            </div>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-name">Norbert Cornelius Tremurici</h1>
        <p className="hero-tagline">{c.heroTagline}</p>
        <div className="hero-scroll">
          <div className="scroll-line" />
        </div>
      </section>

      <div className="divider" />

      {/* Software Projects */}
      <section className="section" id="software">
        <div className="section-header">
          <div>
            <span className="section-label">1.</span>
            <h2 className="section-title">
              {c.softwareTitle[0]}
              <span>{c.softwareTitle[1]}</span>
            </h2>
          </div>
          <div className="section-line" />
        </div>
        <div className="grid">
          {c.softwareCards.map((card) => (
            <Card key={card.title} data={card} />
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Hardware & Embedded */}
      <section className="section" id="hardware">
        <div className="section-header">
          <div>
            <span className="section-label">2.</span>
            <h2 className="section-title">
              {c.hardwareTitle[0]}
              <span>{c.hardwareTitle[1]}</span>
            </h2>
          </div>
          <div className="section-line" />
        </div>

        {/* FPGA PDF button */}
        <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <a
            href="https://codeberg.org/strlst/pages/raw/branch/master/res/portfolio/fpga-experience.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="fpga-button"
          >
            <IconPdf />
            <div>
              <div style={{ fontSize: "1.1rem" }}>{c.fpgaBtn.title}</div>
              <div className="fpga-button-sub">{c.fpgaBtn.sub}</div>
            </div>
          </a>
        </div>

        <div className="grid">
          {c.hardwareCards.map((card) => (
            <Card key={card.title} data={card} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-header">
          <div>
            <span className="section-label">3.</span>
            <h2 className="section-title">
              {c.skillsTitle[0]}
              <span>{c.skillsTitle[1]}</span>
            </h2>
          </div>
          <div className="section-line" />
        </div>
        <div className="skills-strip">
          {c.skillGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: "1.75rem" }}>
              <div className="skills-label">{group.label}</div>
              <div className="skills-list">
                {group.pills.map((p) => (
                  <span key={p} className="skill-pill">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-name">strlst</div>
        <div className="footer-links">
          <a href="https://codeberg.org/strlst" target="_blank" rel="noopener noreferrer">
            Codeberg
          </a>
          <a href="https://github.com/strlst" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://gitlab.com/strlst" target="_blank" rel="noopener noreferrer">
            GitLab
          </a>
        </div>
        <p className="footer-copy">{c.footerCopy}</p>
      </footer>
    </>
  );
}
