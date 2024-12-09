"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import row1Column1 from "@/data/tables/row1Column1";
import {
  Button,
  Checkbox,
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import row4Column1 from "@/data/tables/row4Column1";

const page = () => {
  const {
    isOpen: isDeleteBtn,
    onOpen: onDeleteBtn,
    onOpenChange: onDeleteBtnChange,
  } = useDisclosure();

  const {
    isOpen: isUnblockBtn,
    onOpen: onUnblockBtn,
    onOpenChange: onUnblockBtnChange,
  } = useDisclosure();
  const {
    isOpen: isblockBtn,
    onOpen: onblockBtn,
    onOpenChange: onblockBtnChange,
  } = useDisclosure();

  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row1Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row4Column1.slice(start, end));
    return row4Column1.slice(start, end);
  }, [page, row4Column1, viewValue, rowsPerPage]);
  const labelStyle = "font-bold text-base text-mainBlack min-w-[98px]";
  const dropDownOptions1 = [
    { key: "option1", label: "차단 중" },
    { key: "option2", label: "차단 중" },
    { key: "option3", label: "차단 중" },
  ];
  const dropDownOptions2 = [
    { key: "option1", label: "자체" },
    { key: "option2", label: "자체" },
    { key: "option3", label: "자체" },
  ];
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section>
      <CommonHeader title="포인트 상세정보" />
      <header className="bg-white py-7 px-10 rounded-[20px] flex  justify-between gap-8">
        <div className="w-full">
          <div className="flex items-center gap-14 w-full">
            <div className="w-full">
              <InputWithLabel
                label="아이디"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
              />
            </div>
            <div className="w-full">
              <InputWithLabel
                label="휴대폰번호"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
                placeholder="01000000000"
              />
            </div>
          </div>
          <div className="flex items-center gap-14 w-full mt-5">
            <div className="w-full">
              <InputWithLabel label="이름" labelStyles={`${labelStyle}`} />
            </div>
            <div className=" flex items-center gap-14  w-full ">
              <div className="w-full">
                <InputWithLabel
                  type="date"
                  label="등록일"
                  labelStyles={`${labelStyle}`}
                />
              </div>

              <div className="w-full">
                <InputNoLabel type="date" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-14 w-full mt-5">
            <div w-full>
              <DropDownWithLabel
                title="차단 여부"
                options={dropDownOptions1}
                defaultSelectedKeys="option1"
                titleStyles={labelStyle}
                selectStyles="w-96 "
                // Default selected key
              />
            </div>
            <div className="w-full">
              <DropDownWithLabel
                title="로그인 방식"
                options={dropDownOptions2}
                defaultSelectedKeys="option1"
                titleStyles={labelStyle}
                selectStyles="w-96"
                // Default selected key
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button className="bg-mainBlack py-2 px-14 text-white rounded-md">
            검색
          </Button>
        </div>
      </header>
      <div className="bg-white py-5 px-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[100px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <Button
              className="py-3 px-5 rounded-md bg-grayLight text-white"
              onClick={onDeleteBtn}
            >
              삭제
            </Button>
            <Button
              className="py-3 px-10 rounded-md bg-mainBlack text-white"
              onClick={onblockBtn}
            >
              회원 차단
            </Button>
          </div>
        </header>
        <article className="mt-10">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
              ],
              td: ["px-6  text-center font-normal text-base text-[#363941] "],
            }}
            bottomContent={
              <div className="flex w-full justify-center  mt-8">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              {/* <TableColumn>번호</TableColumn> */}
              <TableColumn className="flex justify-center items-center">
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.number)
                              .includes(id)
                        )
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className={`size-[14px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>
              <TableColumn>번호</TableColumn>
              <TableColumn>아이디</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>휴대폰번호</TableColumn>
              <TableColumn>로그인</TableColumn>
              <TableColumn>가입일</TableColumn>
              <TableColumn>차단 해제</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.number} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[14px] rounded-[2px]`}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.login}</TableCell>
                  <TableCell>{row.joinDate}</TableCell>
                  <TableCell className="text-mainBlue underline underline-offset-1">
                    <button onClick={onUnblockBtn}>{row.unblock}</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </div>

      <Modal
        isOpen={isDeleteBtn}
        placement="center"
        onOpenChange={onDeleteBtnChange}
        hideCloseButton
        classNames={{
          base: ["flex justify-center items-center"],
          body: ["p-6 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-mainBlack font-bold text-3xl text-center">
                  회원 삭제
                </h3>

                <p className="font-normal text-lg text-grayLight">
                  삭제하면 되돌릴 수 없어요
                </p>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-8 rounded-md bg-grayLight font-bold text-base text-white"
                    onClick={() => {
                      onDeleteBtnChange();
                    }}
                  >
                    이전
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-mainRed font-bold text-base text-white"
                    onClick={() => {
                      onDeleteBtnChange();
                    }}
                  >
                    다음
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isUnblockBtn}
        placement="center"
        onOpenChange={onUnblockBtnChange}
        hideCloseButton
        classNames={{
          base: ["flex justify-center items-center"],
          body: ["p-6 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-secondaryBlack font-bold text-xl text-center">
                  차단을 해제하시겠습니까?
                </h3>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-5 rounded-md bg-whiteGray font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onUnblockBtnChange();
                    }}
                  >
                    <p>글쓰기</p>
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-whiteGray font-bold text-base text-[#ED3D2E]"
                    onClick={() => {
                      onUnblockBtnChange();
                    }}
                  >
                    <p>글쓰기</p>
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isblockBtn}
        placement="center"
        onOpenChange={onblockBtnChange}
        hideCloseButton
        classNames={{
          base: ["flex justify-center items-center"],
          body: ["p-6 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-secondaryBlack font-bold text-xl text-center">
                  회원 제재
                </h3>
                <div className="mt-8">
                  <div className=" flex items-center justify-center gap-10 ">
                    <p className="font-bold text-sm text-secondWhiteGray">
                      제재기간
                    </p>
                    <div className="flex items-center">
                      <Checkbox radius="full" size="sm"></Checkbox>
                      <p className="text-sm text-secondWhiteGray">7일</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Checkbox radius="full" size="sm"></Checkbox>
                      <p className="text-sm text-secondWhiteGray">30일</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Checkbox radius="full" size="sm"></Checkbox>
                      <p className="text-sm text-secondWhiteGray">영구</p>
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    <InputWithLabel
                      label="제재사유"
                      labelStyles="font-bold text-sm text-secondWhiteGray min-w-[88px]"
                    />
                  </div>
                </div>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-5 rounded-md bg-whiteGray font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onblockBtnChange();
                    }}
                  >
                    <p>취소</p>
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-whiteGray text-[#ED3D2E] font-bold text-base"
                    onClick={() => {
                      onblockBtnChange();
                    }}
                  >
                    <p>확인</p>
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default page;
