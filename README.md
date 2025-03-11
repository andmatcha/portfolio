# ポートフォリオサイト制作

## 要件定義

### 目的
- Webフロントエンド・バックエンドのスキルや経歴を採用担当者にアピールする。

### 想定ユーザー
- 企業のエンジニア・採用担当者

### 主な内容・機能
- 自己紹介(経歴、スキルセット)
- これまでに取り組んだプロジェクト等
- 問い合わせフォーム

### 使用技術
| 分類 | 技術スタック |
| --- | --- |
| フロントエンド | Next.js (App Router), TypeScript, Tailwind CSS |
| 認証 | NextAuth.js or AWS Cognito |
| バックエンド/API | Next.js API Routes or AWS Lambda |
| DB | DynamoDB |
| ストレージ | AWS S3 |
| メール | AWS SES |
| デプロイ | Vercel / Amplify / ECS+ALB |
| CI/CD | GitHub Actions or Amplify CI/CD |

## 型定義(TypeScript)

```ts
// types/project.ts
export type Image = {
  label: string;
  imageUrl: string;
};

export type Project = {
  projectId: string;
  title: string;
  thumbnailUrl: string;
  startDate: string; // "2024-12"
  endDate?: string;
  description: string;
  tags: string[];
  images?: Image[];
  createdAt: string;
};
```

## テーブル設計(DynamoDB)
| 属性名 | 型 | 説明 |
| --- | --- | --- |
| projectId | Partition Key (PK) | UUID（ユニークID） |
| title | String | プロジェクト名 |
| thumbnailUrl | String | S3の画像URL |
| startDate | String | 例）"2024-12" |
| endDate | String | 任意 |
| description | String | 概要説明文 |
| tags | List | タグ一覧 |
| images | List | サムネイル以外の補足画像(任意) |
| createdAt | String | ISO形式 "2025-03-11T..." |


## API設計
| メソッド | パス | 説明 |
| --- | --- | ---|
| GET | /api/projects | 全プロジェクト一覧を取得 |
| GET | /api/projects/[id] | 特定プロジェクト詳細取得 |
| POST | /api/projects | プロジェクトを新規追加（管理画面）|
| PUT | /api/projects/[id] | プロジェクト更新 |
| DELETE | /api/projects/[id] | プロジェクト削除 |
