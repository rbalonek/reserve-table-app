require 'test_helper'

class SeatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @seat = seats(:one)
  end

  test "should get index" do
    get seats_url, as: :json
    assert_response :success
  end

  test "should create seat" do
    assert_difference('Seat.count') do
      post seats_url, params: { seat: { seat_number: @seat.seat_number, table_id: @seat.table_id } }, as: :json
    end

    assert_response 201
  end

  test "should show seat" do
    get seat_url(@seat), as: :json
    assert_response :success
  end

  test "should update seat" do
    patch seat_url(@seat), params: { seat: { seat_number: @seat.seat_number, table_id: @seat.table_id } }, as: :json
    assert_response 200
  end

  test "should destroy seat" do
    assert_difference('Seat.count', -1) do
      delete seat_url(@seat), as: :json
    end

    assert_response 204
  end
end
